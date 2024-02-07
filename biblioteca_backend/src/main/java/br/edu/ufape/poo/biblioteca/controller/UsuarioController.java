package br.edu.ufape.poo.biblioteca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ufape.poo.biblioteca.model.Usuario;
import br.edu.ufape.poo.biblioteca.service.UsuarioService;

@RestController
public class UsuarioController {
	@Autowired
	private UsuarioService usuarioService;
	
	@RequestMapping("/")
	public String helloWorld() {
		return "Hello World";
	}
	
	@PostMapping("/add")
	public String addUsuario(@RequestBody Usuario usuario) {
		usuarioService.addUsuario(usuario);
		return "Adicionado";
	}
	
	@RequestMapping("/usuario/{id}")
	public Usuario getUsuarioById(@PathVariable("id") long id) {
		return usuarioService.getPatientById(id);
		
	}
	
	@RequestMapping("/usuarios")
	public List<Usuario> getUsuarios() {
		return usuarioService.getUsuarios();
	}
	
	@PutMapping("/usuario/{id}")
	public Usuario updateUsuario(@RequestBody Usuario usuario) {
		return usuarioService.updateUsuario(usuario);
	}
	
	@DeleteMapping("/usuario/{id}")
	public String deleteUsuario(@PathVariable("id")long id) {
		usuarioService.deleteUsuario(id);
		return "Apagado";
	}
	
}
