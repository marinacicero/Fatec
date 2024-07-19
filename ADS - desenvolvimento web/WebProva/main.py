from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

db = mysql.connector.connect(
    host='201.23.3.86',
    port=5000,
    user='usr_aluno',
    password='E$tud@_m@1$',
    database='aula_fatec'
)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def do_login():
    nome = request.form['txt_nome']
    senha = request.form['txt_senha']
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tb_provamarina WHERE nome=%s", (nome,))
    user = cursor.fetchone()
    if user and check_password_hash(user['senha'], senha):
        return render_template('caduser.html')
    else:
        return "Usuário não encontrado ou senha incorreta"

@app.route('/caduser', methods=['GET', 'POST'])
def caduser():
    if request.method == 'POST':
        nome = request.form['txt_nome']
        email = request.form['txt_email']
        senha = generate_password_hash(request.form['txt_senha'])  
        cursor = db.cursor()
        cursor.execute("INSERT INTO tb_provamarina (nome, email, senha) VALUES (%s, %s, %s)", (nome, email, senha))
        db.commit()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tb_provamarina")
    usuarios = cursor.fetchall()
    return render_template('caduser.html', usuarios=usuarios)

@app.route('/delete_usuario/<int:id>', methods=['GET'])
def delete_usuario(id):
    cursor = db.cursor()
    cursor.execute("DELETE FROM tb_provamarina WHERE id=%s", (id,))
    db.commit()
    return redirect(url_for('caduser'))

@app.route('/alterar_usuario/<int:id>', methods=['GET'])
def alterar_usuario(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tb_provamarina WHERE id=%s", (id,))
    usuarios = cursor.fetchall()
    return render_template('caduser.html', usuarios=usuarios, opcao="alterar")

@app.route('/update_usuario', methods=['POST'])
def update_usuario():
    nome = request.form['txt_nome']
    email = request.form['txt_email']
    senha = generate_password_hash(request.form['txt_senha'])  # Hash a nova senha
    id = request.form['txt_id']
    cursor = db.cursor()
    cursor.execute("UPDATE tb_provamarina SET nome=%s, email=%s, senha=%s WHERE id=%s", (nome, email, senha, id))
    db.commit()
    return redirect(url_for('caduser'))

@app.route('/produto', methods=['GET', 'POST'])
def produto():
    if request.method == 'POST':
        nome = request.form['txt_nome']
        descricao = request.form['txt_descricao']
        preco = request.form['txt_preco']
        cursor = db.cursor()
        cursor.execute("INSERT INTO tbmarina_produto (nome, descricao, preco) VALUES (%s, %s, %s)", (nome, descricao, preco))
        db.commit()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tbmarina_produto")
    produtos = cursor.fetchall()
    return render_template('produto.html', produtos=produtos)

@app.route('/delete_produto/<int:id>', methods=['GET'])
def delete_produto(id):
    cursor = db.cursor()
    cursor.execute("DELETE FROM tbmarina_produto WHERE id=%s", (id,))
    db.commit()
    return redirect(url_for('produto'))

@app.route('/alterar_produto/<int:id>', methods=['GET'])
def alterar_produto(id):
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tbmarina_produto WHERE id=%s", (id,))
    produtos = cursor.fetchall()
    return render_template('produto.html', produtos=produtos, opcao="alterar")

@app.route('/update_produto', methods=['POST'])
def update_produto():
    nome = request.form['txt_nome']
    descricao = request.form['txt_descricao']
    preco = request.form['txt_preco']
    id = request.form['txt_id']
    cursor = db.cursor()
    cursor.execute("UPDATE tbmarina_produto SET nome=%s, descricao=%s, preco=%s WHERE id=%s", (nome, descricao, preco, id))
    db.commit()
    return redirect(url_for('produto'))

@app.route('/logoff')
def logoff():
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run
