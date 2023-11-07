package gerenciamento.livros.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_livros")
public class Livros {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@NotNull
	private String nome;
	
	@NotNull 
	@NotBlank 
	private String descricao;
	
	@NotNull 
	@NotBlank 
	@Size(min = 6, message = "Mínimo 6 caracteres")
	private String isbn;
	
	
	public Livros() {
		
	}
	
	
	public Livros(Long id, @NotNull @NotBlank String nome, @NotNull @NotBlank String descricao,
			@NotNull @NotBlank @Size(min = 6, message = "Mínimo 6 caracteres") String isbn) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.isbn = isbn;
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public String getIsbn() {
		return isbn;
	}


	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}	
	
	
	
	

}
