package com.lab04.backend.models;

public class vantagens{

private String nome;
private String descricao;
private Moeda preco;
private empresa origem  

//constructo

Vantagens(){

}

vantagens(String nomes,String descricao,Moeda Moeda,empresa proprietario){
    this.nome=nomes;
    this.descricao=descricao;
    this.Moeda=Moeda;

}
vantagens(String nomes,String descricao,long Lastro, Interge Ano){
    this.Moeda= new Moeda(long Lastro,Integer Ano);
    this.nome=nome;
    this.descricao=descricao;
}

// get set


}