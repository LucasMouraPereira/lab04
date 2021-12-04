package com.lab04.backend.models;

public class vendas{

private String nome;
private String descriçao;
private Moeda preço;

//constructo

vendas(){

}
vendas(String nomes,String descriçao,Moeda Moeda){
    this.nome=nomes;
    this.descriçao=descriçao;
    this.Moeda=Moeda;

}
vendas(String nomes,String descriçao,long Lastro, Interge Ano){
    this.Moeda= new Moeda(long Lastro,Integer Ano);
    this.nome=nome;
    this.descriçao=descriçao;
}

// get set


}