##BOTÃO QUE SE MOVE##

Como funciona (conceitos)

=> Você usa o useState para controlar a posição (x, y) do botão.

=> Anexa-se um onMouseMove ou onMouseEnter ao botão.
Quando o mouse entra ou se move sobre o botão, a função é chamada.

=> Dentro da função, usa-se window.innerWidth, window.innerHeight e Math.random() para gerar coordenadas top e left que mantêm o botão dentro da janela visível.

=> A nova posição aleatória é usada para atualizar o estado,
e o estilo style={{ top: y, left: x }} do botão é reconfigurado, movendo-o. 

#########################################################################

#Tecnologias#

Biblioteca utilizada: REACT (import na primeira linha)

Linguagens utilizadas: JS/JSX, CSS, HTML

"Componentes funcionais": Botão(function: BotaoFugitivo) 

Não utilizei Props mas foi utilizado State/Hooks:
Foi usado useState para controlar a posição do botão

##########################################################################

#Comportamento#

onMouseMove={handleMouseMove}: sempre que o mouse passa pelo botão, ele calcula uma nova posição aleatória dentro da janela

onClick={() => alert('Você conseguiu clicar!')}: se o usuário conseguir clicar, aparece um alerta

Dentro de style:

position: 'absolute'
As propriedades top e left passam a controlar a posição do botão na tela

top: position.top 
Define a distância do topo (em pixels) até o botão.
O valor vem do estado position do componente (useState), ou seja, muda dinamicamente conforme você chama setPosition.

left: position.left
Define a distância da esquerda (em pixels) até o botão.
Também vem do estado position, então o botão “foge” mudando left e top no onMouseMove.

padding: '10px 20px' (Ajuda a deixar o texto longe da borda)
Define o espaço interno (respiração) do botão:
10px vertical (topo/baixo)
20px horizontal (esquerda/direita)

cursor: 'pointer'
Troca o cursor para a mãozinha quando passa por cima do botão indicando que é clicável.

transition: 'all 0.2s ease-out'
Responsável pela animação
Qualquer mudança de estilo (como top, left, opacity, etc.) não acontece de forma instantânea, mas com uma animação curta e suave.
