package br.edu.ufape.poo.biblioteca.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.edu.ufape.poo.biblioteca.model.Usuario;
import br.edu.ufape.poo.biblioteca.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	
    private final UsuarioRepository usuarioRepository;
  
    UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
	
	public Usuario addUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	public Usuario getPatientById(long id) {
		return usuarioRepository.findById(id).get();
	}
	public List<Usuario> getUsuarios(){
		return (List<Usuario>) usuarioRepository.findAll();
	}
	public void deleteUsuario(long id) {
		usuarioRepository.deleteById(id);
	}
	
	public Usuario updateUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
}
