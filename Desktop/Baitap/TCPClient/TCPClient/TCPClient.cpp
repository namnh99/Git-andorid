#include "stdafx.h"
#define _WINSOCK_DEPRECATED_NO_WARNINGS
#define BUFF_SIZE 256
#include <WinSock2.h>
#include <winsock.h>
#include <WS2tcpip.h>
#include <iostream>

using namespace std;

#pragma comment(lib, "ws2_32")

int main(int argc, char * argv[])
{
	char * address = argv[1];
	int port = atoi(argv[2]);
	WSADATA wsa;
	int ret = WSAStartup(0x0202, &wsa);
	if (ret == 0) {
		cout << "Initialized WSA" << endl;
	}
	else {
		cout << "Error: " << ret;
	}

	SOCKET client = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

	SOCKADDR_IN addr;
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = inet_addr(address);
	addr.sin_port = htons(port);

	cout << "Connecting to " << inet_ntoa(addr.sin_addr) << ":" << port << endl;
	do {
		ret = connect(client, (SOCKADDR*)&addr, sizeof(addr));
		if (ret == 0) break;
		cout << "Can not connect to " << address << ":" << port << endl;
		cout << "Enter to reconnect" << endl;
		system("pause");
	} while (true);

	cout << "Connected to " << inet_ntoa(addr.sin_addr) << ":" << port << endl;
	
	char buf[BUFF_SIZE];
	
	while (1) {

		cout << "Send to " << address << ":" << port << " (exit to quit):" << endl;
		cin >> buf;
		if (strncmp("exit", buf, 4) == 0) break;
		else {
			ret = send(client, buf, strlen(buf), 0);
			if (ret <= 0) {
				cout << "Connection loss ... Exiting ... ";
				system("pause");
				return 1;
			}
		}
	}
	closesocket(client);
	WSACleanup();
	system("pause");
	return 0;
}