/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test1;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author hainam
 */
public class Test1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        boolean flag = true;
        int date = 1999;
        String name;
        int old;
        String[] male = {"Nam", "male"};
        String[] female = {"Nu", "female"};
        String[] result ={"Ban bi gay", "Ban binh thuong", "Ban beo"};
        String gioiTinh;
        double hight = 1.75;
        double weight = 60;
        Scanner sc = new Scanner(System.in);
        System.out.println("Nhap ho va ten: ");
        name = sc.nextLine();
        
        System.out.println("Nhap nam sinh cua ban: ");
        while (flag == true) {
            if (sc.hasNextInt()) {
                date = sc.nextInt();
                if (date < 1920) {
                    System.out.println("Ban qua gia ! ban dung lua toi, moi ban nhap lai");
                } else if (date > 2021) {
                    System.out.println("Ban qua tre ! ban dung loi toi, moi ban nhap lai");
                } else {
                    flag = false;
                }
            } else {
                sc.next();
                System.out.println("Nhap sai cu phap, moi ban nhap lai ");
            }
        }
        old = 2021 - date;
        
        System.out.println("Nhap gioi tinh cua ban (Nam hoac Nu)");
        gioiTinh = sc.nextLine();
        while (true) {    
            gioiTinh = sc.nextLine();
            if (gioiTinh.equals(male[0])){
                gioiTinh = male[1];
                break;
            } else if (gioiTinh.equals(female[0])){
                gioiTinh = female[1];
                break;
            } else {
                System.out.println("Ban nhap sai, moi ban nhap lai (Nam hoac Nu): ");
            } 
        }
        
        System.out.println("Nhap chieu cao cua ban (m)");
        while(true){
            if (sc.hasNextDouble()){
                hight = sc.nextDouble();
                if (hight > 0 && hight < 2) break; 
            } else {
                sc.next();
                System.out.println("Sai moi ban nhap lai: "); 
            }
        }
        
        System.out.println("Nhap can nang cua ban (kg)");
        while(true){
            if (sc.hasNextDouble()){
                weight = sc.nextDouble();
                if (weight > 0 && weight < 200) break; 
            } else {
                sc.next();
                System.out.println("Sai moi ban nhap lai: "); 
            }
        }
        
        double BMI = (weight)/(hight*hight);
        System.out.println("==============");
        System.out.println("Chuan doan cua ban");
        System.out.println(name);
        System.out.println(old + "tuoi");
        System.out.println("Chi so BMI = " + BMI);
        if (BMI < 18.5) System.out.println(result[0]);
        if (BMI > 25) System.out.println(result[2]);
        else System.out.println(result[1]);
        System.out.println(gioiTinh);
    }
}
