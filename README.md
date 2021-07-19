# **Curso de Angular: Avançando no design de componentes com acessibilidade**

Instrutor:  Flavio Henrique de Souza Almeida

---

## Anotações

### Aula 1

- Não utilizaremos o componente `ModalComponent` através da sua forma declarativa `app-modal`. O componente será criado dinamicamente através do serviço `ModalService` que será o responsável em inserir o componente na `view`.
- O método open de `ModalService` é o responsável pela criação de `ModalComponent`. Seu retorno será um `ModalRef`, uma referência para o componente criado que permite o desenvolvedor fechá-lo. Uma instância de `ModalRef` possui apenas o método close.

### Aula 2

- Se a `interface` for utilizada em outro módulos, criar um arquivo para a `interface`
- Criar elementos do `DOM` para esse tipo de `template` → É através da diretiva `*ngTemplateOutlet`, finalidade de renderizar um template na view do component na qual foi utilizada.
- `ComponentFactoryResolver` é capaz de criar fábricas responsáveis pela criação dinâmica de componentes. Cada fábrica criada pode criar quantos componentes daquele tipo de fábrica.
- `resolveComponentFactory(ModalComponent)` como parâmetro passamos o componente que desejamos criar dinamicamente, o retorno é a fábrica que vai criar o componente
- `this.componenteFactory.create()`, precisa da referência do `Injector` do Angular.
- O `ComponentRef` é um artefato com Angular que encapsula uma instância do componente criado dinamicamente.
- Já `ModalRef` é uma criação nossa que encapsula um `ComponentRef` possuindo apenas o método close sem export a referência para o desenvolvedor cliente da nossa API.
- `ApplicationRef` Quando injetado nos fornece uma referência para a instância da aplicação que esta carregada no navegador
- O `componentRef` é um **wraper** que tem dentro dele a instância do meu componente, ou seja, instância da classe do meu componente `modalComponent`. Só que ele também tem a `hostview`, que é o template desse componente.
- `EmbeddedViewRef`: É uma classe abstrata que estende a classe `ViewRef`.

### Aula 3

- Função `trigger` do módulo `@angular/animations` → É uma função responsável em definir um gatilho para animações. Todo gatilho possui um nome e é através desse nome que podemos referenciar a animação no `template` dos nossos componentes contanto que eles importem e registram a animação no propriedade `animations` de **decorator** `@Component.`
- Função `transition` do módulo `@angular/animations` → Seu primeiro parâmetro define o momento no qual desejamos aplicar a transição. Seu segundo parâmetro é uma array com o estado iniciar de propriedades CSS e animações que desejamos aplicar.
- Função `style` do módulo `@angular/animations` → especifica regras de css para usarmos em conjunto com a animação.
- **template** para que aceite a animação `slideIn` → `[@slideIn]`
- `$eventstopPropagation` → Impede a propagação do evento por seus respectivos listeners.

### Aula 4

- Regras de Acessibilidade no modal
    - Abre o modal o primeiro elemento tem que estar em foco
    - O foco tem que ficar preso no modal
- **Decorator** `@HostListener` → Permitir adicionar **handlers** para eventos do elemento host do componente. Lembre-se que se a forma declarativa do seu componente é `app-meu-component`, uma **tag** correspondente será criado no DOM. É essa **tag** que hospeda todo o **template** do seu componente, por isso que ela é chamada de host **element**.
- Propriedade `document.activeElement` → Nos dá uma referência para o elemento com focus dentro do documento (página) exibida.

### Aula 5

- O atributo `disabled` não permite que o elemento ganhe foco pelo teclado, inclusive tornando-o indetectável por **screen readers.** Já o atributo `aria-disabled` serve para indicar que um elemento, por algum motivo específico, está desabilitado para **screen readers,** porém ainda acessível pelo teclado.
- Atributo `aria-invalid` → Indica para screen readers que o componente de entrada está inválido.
