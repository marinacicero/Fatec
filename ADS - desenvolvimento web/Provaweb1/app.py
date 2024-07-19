from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculo2grau')
def calculo2grau():
    return render_template('calculo2grau.html')

@app.route('/fahrenheit')
def fahrenheit():
    return render_template('fahrenheit.html')

@app.route('/calc_fahrenheit', methods=['GET'])
def calc_fahrenheit():
    try:
        celsius = float(request.args.get('celsius'))
        fahrenheit = celsius * 1.8 + 32
        return redirect(url_for('resultado_fahrenheit', celsius=celsius, fahrenheit=fahrenheit))
    except ValueError:
        return "Valor inválido. Certifique-se de inserir um número válido para Celsius."

    
@app.route('/resultado_fahrenheit')
def resultado_fahrenheit():
    celsius = request.args.get('celsius')
    fahrenheit = request.args.get('fahrenheit')
    return render_template('resultado_fahrenheit.html', celsius=celsius, fahrenheit=fahrenheit)

@app.route('/calc_2grau', methods=['POST'])
def calc_2grau():
    try:
        a = float(request.form['a'])
        b = float(request.form['b'])
        c = float(request.form['c'])

        # Calcula o discriminante
        delta = b**2 - 4*a*c

        if delta > 0:
            x1 = (-b + delta**0.5) / (2*a)
            x2 = (-b - delta**0.5) / (2*a)
            resultado = f"As raízes são x1 = {x1:.2f} e x2 = {x2:.2f}"
        elif delta == 0:
            x = -b / (2*a)
            resultado = f"A raiz dupla é x = {x:.2f}"
        else:
            resultado = "Não há raízes reais (delta < 0)"

        return redirect(url_for('resultado_2grau', resultado=resultado))
    except ValueError:
        return "Valores inválidos. Certifique-se de inserir números válidos para 'a', 'b' e 'c'."

@app.route('/resultado_2grau')
def resultado_2grau():
    resultado = request.args.get('resultado')
    return render_template('resultado_2grau.html', resultado=resultado)


if __name__ == '__main__':
    app.run(debug=True)