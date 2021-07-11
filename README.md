# **Curso de Angular: Avançando no design de componentes com acessibilidade**

Instrutor:  Flavio Henrique de Souza Almeida

---

## Informações do Curso

---

## Anotações

### Aula 1

- Não utilizaremos o componente `ModalComponent` através da sua forma declarativa `app-modal`. O componente será criado dinamicamente através do serviço `ModalService` que será o responsável em inserir o componente na `view`.
- O método open de `ModalService` é o responsável pela criação de `ModalComponent`. Seu retorno será um `ModalRef`, uma referência para o componente criado que permite o desenvolvedor fechá-lo. Uma instância de `ModalRef` possui apenas o método close.
