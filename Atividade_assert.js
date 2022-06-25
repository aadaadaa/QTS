import {
    assertExists,
    assertMatch,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let livros = ['Livro 1','Livro 2'];
let paginas = [98, 78];
let imagens = 0;
Deno.test("Teste da definação da assert", () => {
    assertExists(livros, "Não foi encontrada a variavel livros");
    assertExists(paginas, "Não foi encontrada a variavel páginas");
    assertExists(imagens, "Não foi encontrada a variavel imagens");
  })

Deno.test("Teste de não existencia", () => {
    assertNotEquals(livros, "Livro 2", "Erro: há um Livro 2");
    assertNotEquals(paginas, 98, "Erro: há uma pagina 22");
    assertNotEquals(imagens, 'foto1', "Erro: há a foto1");
  });

  const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Teste de verificação(certo)", () => {
    assertMatch("https://www.youtube.com", Url, "Erro: essa url não bate com o padrão desejado");
    assertMatch("https://web.whatsapp.com", Url), "Erro: essa url não bate com o padrão desejado";
  });

Deno.test("Teste de verificação(errado)", () => {
    assertNotMatch("https://www.twitch.tv/", Url, "Erro: essa url está no padrão desejado");
  });
