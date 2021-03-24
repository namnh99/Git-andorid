// TCPServer.cpp : Defines the entry point for the console application.
//
#include "stdafx.h"
#define _WINSOCK_DEPRECATED_NO_WARNINGS
#define _CRT_SECURE_NO_WARNINGS
#define BUFF_SIZE 256
#include <WinSock2.h>
#include <winsock.h>
#include <WS2tcpip.h>
#include <iostream>

using namespace std;

#pragma comment(lib, "ws2_32")

int main(int argc, char*argv[])
{	
	int port = atoi(argv[1]);
	char * fileSend = argv[2];
	char * fileRecv = argv[3];
	
	WSADATA wsa;
	int ret = WSAStartup(0x0202, &wsa);
	if (ret == 0) {
		cout << "Initialized WSA" << endl;
	}
	else {
		cout << "Error: " << ret;
	}

	SOCKET listener = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

	SOCKADDR_IN addr;
	addr.sin_family = AF_INET;
	addr.sin_addr.s_addr = htonl(INADDR_ANY);
	addr.sin_port = htons(port);


	bind(listener, (SOCKADDR*)&addr, sizeof(addr));
	listen(listener, 5);

	cout << "Waiting connection in port: " << port << endl;
	SOCKET client = accept(listener, NULL, NULL);

	cout << "Conected to " << client << endl;

	char buf[BUFF_SIZE];

	FILE *f = fopen(fileSend, "w");
	if (f == NULL) {
		cout << "Erorr read file @@ ..." << endl;
		system("pause");
		return 1;
	}

	cout << "Sending to client..." << endl;
	while (1) {
		ret = fread(buf, 1, sizeof(buf), f);
		if (ret > 0) send(client, buf, sizeof(buf), 0);
		else break;
	}
	cout << "Sended !!!" << endl;

	char buf1[BUFF_SIZE];

	FILE *f1 = fopen(fileRecv, "w");
	ret = recv(client, buf1, sizeof(buf1), 0);
	
	cout << "Received: " << buf1 << endl;
	fwrite(buf1, 1, ret, f1);
	fclose(f);
	fclose(f1);

	closesocket(client);
	closesocket(listener);
	WSACleanup();
	system("pause");
	return 0;


    return 0;
}

