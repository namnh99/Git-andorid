/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import java.util.Scanner;

/**
 *
 * @author hainam
 */
public class Test {

    /**
     * @param args the command line arguments
     */
    
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
        boolean flag1 = true, flag2 = true, flag3 = true;
        double a = 0 ,b = 0, c =0;
        double x;
        double Delta;
        double E;
        double x1;
        double x2;
        System.out.println("Giai phuong trinh ax + b = 0");
        while(flag1 == true){
            System.out.println("Nhap a: ");
            if (sc.hasNextDouble()){
                a = sc.nextDouble();
                flag1 = false;     
            } else {
                sc.next();
                System.out.println("Sai cu phap, Nhap lai: "); 
            }
        }
        while(flag2 == true){
            System.out.println("Nhap b: ");
            if (sc.hasNextDouble()){
                b = sc.nextDouble();
                flag2 = false;     
            } else {
                sc.next();
                System.out.println("Sai cu phap, Nhap lai: "); 
            }
        }
        while(flag3 == true){
            System.out.println("Nhap c: ");
            if (sc.hasNextDouble()){
                c = sc.nextDouble();
                flag3 = false;     
            } else {
                sc.next();
                System.out.println("Sai cu phap, Nhap lai: "); 
            }
        }
        if (a == 0){
            if (b == 0){
            if (c == 0){System.out.println("phuong trinh co vo so nghiem");}
            else {System.out.println("phuong trinh vo nghiem");}
            } else {
            x = (double) -c/b;
            System.out.println("nghiem cua phuong trinh la: " +x );
        }
        } else { 
           Delta = (double)((b*b)-(4*a*c));
           E = (double) Math.sqrt(Delta);
           if(Delta < 0){
               System.out.println("phuong trinh vo nghiem");
           } else if (Delta == 0) {
               x = (double) (-b/(2*a));
               System.out.println("phuong trinh co nghiem kep x1=x2=" +x);
        }else {
           x1 = (double) ((-b - E)/(2*a));
           x2 = (double) ((-b + E)/(2*a));
            System.out.println("Phuong trinh co 2 nghiem la x1,x2");
            System.out.println("x1 = " +x1);
            System.out.println("x2 = " +x2);
           }
        } 
    }
}
