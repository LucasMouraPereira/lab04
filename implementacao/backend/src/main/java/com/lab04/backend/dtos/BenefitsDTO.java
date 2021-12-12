package com.lab04.backend.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BenefitsDTO {

    private Integer id;
    private String name;
    private Double value;
    private String url;


	public BenefitsDTO(Integer id, String name, Double value,String url ) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.url=url;
    }

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

    public String getURL() {
		return url;
	}

	public void setURL(String uRL) {
		url = uRL;
	}
}
