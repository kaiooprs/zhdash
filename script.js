// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded');

// --- LÓGICA: Calculadora de Horas ---
function calcularHoras() {
    const h1 = parseInt(document.getElementById('h_ini').value) || 0;
    const m1 = parseInt(document.getElementById('m_ini').value) || 0;
    const h2 = parseInt(document.getElementById('h_fim').value) || 0;
    const m2 = parseInt(document.getElementById('m_fim').value) || 0;

    let total1 = (h1 * 60) + m1;
    let total2 = (h2 * 60) + m2;

    if (total2 < total1) total2 += 1440; 

    const dif = total2 - total1;
    document.getElementById('res_minutos').innerText = dif;
    document.getElementById('res_formatado').innerText = `Tempo: ${Math.floor(dif/60)}h ${(dif%60).toString().padStart(2,'0')}min`;
}

// --- LÓGICA: Calculadora de Corte ---
function calcularCorte() {
    const qtd = document.getElementById('chapas').value;
    const sel = document.getElementById('material_corte');
    const opt = sel.options[sel.selectedIndex];
    
    if (!qtd || qtd <= 0) return;
    const res = (qtd * opt.dataset.multi) / opt.dataset.div;
    document.getElementById('resultado_corte').innerText = res.toFixed(2);
}

// --- LÓGICA: Calculadora de Consumo ---
function calcularConsumo() {
    const qtd = document.getElementById('quantidade_consumo').value;
    const cons = document.getElementById('material_consumo').value;
    
    if (!qtd || qtd <= 0) return;
    const res = qtd * cons;
    document.getElementById('resultado_consumo').innerText = res.toFixed(3);
}

function calcularRegra3() {
    // Pega os valores digitados pelo usuário
    const a = parseFloat(document.getElementById('regra_a').value);
    const b = parseFloat(document.getElementById('regra_b').value);
    const c = parseFloat(document.getElementById('regra_c').value);
    const campoResultado = document.getElementById('resultado_regra3');

    // Validação simples para não deixar campos vazios ou divisão por zero
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha todos os três campos!");
        return;
    }
    
    if (a === 0) {
        alert("O valor de (A) não pode ser zero, pois não existe divisão por zero!");
        return;
    }

    // Executa a fórmula da Regra de 3 Direta
    const x = (b * c) / a;

    // Exibe o resultado formatado com até 2 casas decimais
    campoResultado.innerText = x.toFixed(2);
}
