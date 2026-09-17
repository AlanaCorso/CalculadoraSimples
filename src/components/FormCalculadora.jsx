import { useState } from 'react'
// Importa os estilos CSS usando CSS Modules
import styles from './FormCalculadora.module.css'

// Declaração do componente funcional da calculadora
function FormCalculadora() {
    // Declaração das variáveis de estado
    const [num1, setNum1] = useState('') // Guarda o valor do primeiro número
    const [num2, setNum2] = useState('') // Guarda o valor do segundo número
    const [operacao, setOperacao] = useState('+') // Guarda a operação selecionada (+, -, *, /)
    const [resultado, setResultado] = useState(null) // Guarda o resultado ou mensagem a ser exibida

    // Função responsável por limpar/resetar todos os campos do formulário
    function limpar() {
        // Função limpar
        setNum1('') // Limpa o primeiro número
        setNum2('') // Limpa o segundo número
        setOperacao('+') // Restaura a operação para o valor padrão ('+')
        setResultado(null) // Limpa o resultado exibido
    }

    // Função responsável por calcular a operação matemática
    function calcular(e) {
        e.preventDefault() // Evita o recarregamento automático da página ao enviar o formulário

        // Converte os textos digitados nos inputs para números decimais
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)

        // Validação: verifica se algum dos valores não é um número válido
        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Preencha os dois campos com números!') // Exibe mensagem de erro
            return // Interrompe a execução da função
        }

        let res = 0 // Variável local temporária para acumular o cálculo
        setResultado(`Resultado: ${res}`) // Atualiza o estado para refletir na tela

        // Estrutura condicional para decidir qual cálculo fazer de acordo com a operação
        switch (operacao) {
            case '+':
                res = n1 + n2 // Operação de adição
                break
            case '-':
                res = n1 - n2 // Operação de subtração
                break
            case '*':
                res = n1 * n2 // Operação de multiplicação
                break
            case '/':
                // Validação para impedir a divisão por zero
                if (n2 === 0) {
                    setResultado('Erro: Divisão por zero!')
                    return // Interrompe a função se o divisor for zero
                }
                res = n1 / n2 // Operação de divisão
                break
            default:
                return
        }

        // Atualiza o estado 'resultado' com a mensagem contendo o valor final calculado
        setResultado(`Resultado: ${res}`)
    }

    // Retorno da estrutura JSX que constrói a interface gráfica
    return (
        <div>
            {/* Formulário com evento 'onSubmit' associado à função 'calcular' */}
            <form onSubmit={calcular} className={styles.formContainer}>
                <h2>Calculadora Simples</h2>

                {/* Campo de entrada do primeiro número */}
                <div className={styles.campo}>
                    <input 
                        type="number" // Permite apenas entrada numérica
                        step="any" // Permite números decimais (com ponto/vírgula)
                        placeholder="Primeiro número..."
                        value={num1} // Liga o valor do campo ao estado 'num1'
                        onChange={(e) => setNum1(e.target.value)} // Atualiza 'num1' ao digitar
                    />
                </div>

                {/* Seleção da operação matemática */}
                <div className={styles.campo}>
                    {/* Menu suspenso ligado ao estado 'operacao' */}
                    <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                </div>

                {/* Campo de entrada do segundo número */}
                <div className={styles.campo}>
                    <input 
                        type="number"
                        step="any"
                        placeholder="Segundo número..."
                        value={num2} // Liga o valor do campo ao estado 'num2'
                        onChange={(e) => setNum2(e.target.value)} // Atualiza 'num2' ao digitar
                    />
                </div>

                {/* Botões de ação */}
                <div className={styles.btn}>
                    {/* Botão para submeter o formulário e disparar a função 'calcular' */}
                    <input type="submit" value="Calcular" />
                    {/* Botão para acionar a função 'limpar' */}
                    <input type="button" value="Limpar" onClick={limpar} />
                </div>

                {/* Div que exibe o resultado do cálculo */}
                <div className={styles.resultado}>
                    <p>{resultado}</p> {/* Exibe o valor do estado 'resultado' */}
                </div>
            </form>
        </div>
    )
}

// Exporta o componente para ser reutilizado em outros arquivos do projeto
export default FormCalculadora