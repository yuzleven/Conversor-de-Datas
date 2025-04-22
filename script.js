window.onload = function () {
    const imagemCalendario = document.querySelector(".imagem_calendario");
    const containerPrincipal = document.querySelector(".container_principal");

    setTimeout (() => {
        imagemCalendario.style.opacity = 0;
    }, 2000);

    setTimeout (() => {
        imagemCalendario.style.display = "none";
        containerPrincipal.style.display = "flex";

        containerPrincipal.classList.add("fade-in");
      }, 3000);
}


    let conteudoArquivo = '';

    const inputArquivo = document.getElementById('inputArquivo');
    const btnConverter = document.getElementById('btnConverter');
    const resultado = document.getElementById('resultado');
    const previaConvertido = document.getElementById('previaConvertido');
    const textoInformativo = document.getElementById('texto_informativo');
    const labelArquivo = document.getElementById('labelArquivo');

    inputArquivo.addEventListener('change', function () {
      const arquivo = inputArquivo.files[0];

      if (!arquivo) return;

      if (arquivo && arquivo.name.endsWith('.txt')) {
        const leitor = new FileReader();

        leitor.onload = function (e) {
          conteudoArquivo = e.target.result;
            btnConverter.disabled = false;
            labelArquivo.textContent = arquivo.name;
            textoInformativo.textContent = 'Arquivo carregado com sucesso! Clique em "Converter"!.';
        };

        leitor.readAsText(arquivo);
      } else {
        alert('Por favor, selecione um arquivo .txt válido.');
        conteudoArquivo = "";
        inputArquivo.value = "";
        btnConverter.disabled = true;
        labelArquivo.textContent = 'Enviar Arquivo';
        textoInformativo.textContent = 'Anexe um arquivo txt que deseja converter!';
      }
    });

    btnConverter.addEventListener('click', function () {
      if (!conteudoArquivo) {
        alert('Nenhum conteúdo carregado.');
        return;
      }

      const convertido = conteudoArquivo.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3/$2/$1");
      previaConvertido.value = convertido;
      document.getElementById("display_none").style.display = 'none';
      previaConvertido.style.display = 'block';

      resultado.textContent = "Arquivo convertido com sucesso!";
    });