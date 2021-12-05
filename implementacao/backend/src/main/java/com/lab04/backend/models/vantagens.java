package com.lab04.backend.models;

public class vantagens{

private String nome;
private String descricao;
private float preco;
//private empresa origem  

//constructo

Vantagens(){

}

vantagens(String nomes,String descricao,Integer Moeda){
    this.nome=nomes;
    this.descricao=descricao;
    this.preco=Moeda;

}
vantagens(String nomes,String descricao){
   
    this.nome=nome;
    this.descricao=descricao;
}

// get set


}