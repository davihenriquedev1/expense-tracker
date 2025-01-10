export const maskNumber = (maxIntDgts?: number, value?: string) => {
    if (!value) return ''; // Caso o valor seja undefined ou vazio, retorna uma string vazia
  
    // Remove qualquer caractere que não seja número, vírgula ou ponto
    value = value.replace(/[^0-9,\.]/g, '').replace(',', '.'); 
  
    // Verifica se é um valor inteiro
    if (/^\d+$/.test(value)) {
      if (maxIntDgts && value.length > maxIntDgts) {
        value = value.slice(0, maxIntDgts) + '.' + value.slice(maxIntDgts); // Adiciona ponto para separar as casas decimais
      }
    } else {
      // Limita o valor a 'maxIntDgts + 3' (para ponto e 2 casas decimais)
      if (maxIntDgts && value.length > maxIntDgts + 3) {
        value = value.slice(0, maxIntDgts + 3);
      }
      const [intPart, decimalPart] = value.split('.');
      // Caso tenha mais de uma parte decimal, junta elas corretamente
      value = decimalPart ? `${intPart}.${decimalPart.slice(0, 2)}` : value;
    }
  
    return value;
  }
  