
 const text = "Criador de conteúdos focado em humor e memes que arrancam risadas todos os dias. Se tens uma marca, produto ou evento e queres alcançar um público engajado e descontraído, entre em contacto - estou aberto para parcerias e divulgações. Manda mensagem na DM!";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();




