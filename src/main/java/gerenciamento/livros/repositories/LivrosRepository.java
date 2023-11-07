package gerenciamento.livros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gerenciamento.livros.entities.Livros;

public interface LivrosRepository extends JpaRepository<Livros,Long>{

}
