let nome = 'Gustavo Gouveia'
let nome2 = ['Tomas', 'Leila', 'Adri', 'Kaua']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(nome, "Gustavo"); 
    assertStringIncludes(nome, "Gouveia");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "João"],
        "Opa! Algo deu errado!");
})