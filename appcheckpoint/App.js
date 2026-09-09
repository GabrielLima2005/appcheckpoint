import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// ==========================================
// PRODUTOS
// ==========================================

const produtos = [
  {
    id: '1',
    nome: 'X-Bacon',
    descricao: 'Hambúrguer, queijo, bacon e molho especial',
    categoria: 'Lanches',
    preco: '24,90',
    nota: '4.9',
    imagem:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
  },

  {
    id: '2',
    nome: 'X-Salada',
    descricao: 'Hambúrguer, queijo, alface, tomate e molho',
    categoria: 'Lanches',
    preco: '22,90',
    nota: '4.8',
    imagem:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600',
  },

  {
    id: '3',
    nome: 'X-Tudo',
    descricao: 'Hambúrguer, queijo, bacon, ovo, presunto e salada',
    categoria: 'Lanches',
    preco: '29,90',
    nota: '4.9',
    imagem:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600',
  },

  {
    id: '4',
    nome: 'Batata Frita',
    descricao: 'Porção de batatas crocantes e sequinhas',
    categoria: 'Acompanhamentos',
    preco: '15,90',
    nota: '4.7',
    imagem:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600',
  },

  {
    id: '5',
    nome: 'Refrigerante',
    descricao: 'Refrigerante gelado 350ml',
    categoria: 'Bebidas',
    preco: '6,00',
    nota: '4.6',
    imagem:
      'https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?w=600',
  },

  {
    id: '6',
    nome: 'Milkshake',
    descricao: 'Milkshake cremoso de chocolate',
    categoria: 'Bebidas',
    preco: '14,90',
    nota: '4.9',
    imagem:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600',
  },

  {
    id: '7',
    nome: 'Hot Dog',
    descricao: 'Salsicha, queijo, milho, batata palha e molho',
    categoria: 'Lanches',
    preco: '18,90',
    nota: '4.8',
    imagem:
      'https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=600',
  },

  {
    id: '8',
    nome: 'Combo Família',
    descricao: '2 X-Bacon + batata grande + 2 refrigerantes',
    categoria: 'Combos',
    preco: '59,90',
    nota: '5.0',
    imagem:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600',
  },
];

// ==========================================
// COMPONENTE DO PRODUTO
// ==========================================

function ProdutoCard({ produto }) {
  return (
    <View style={styles.card}>

      <Image
        source={{ uri: produto.imagem }}
        style={styles.imagem}
      />

      <View style={styles.info}>

        <Text style={styles.nome}>
          {produto.nome}
        </Text>

        <Text style={styles.descricao}>
          {produto.descricao}
        </Text>

        <View style={styles.rodapeCard}>

          <Text style={styles.preco}>
            R$ {produto.preco}
          </Text>

          <View style={styles.notaContainer}>
            <Text style={styles.estrela}>★</Text>

            <Text style={styles.nota}>
              {produto.nota}
            </Text>
          </View>

        </View>

      </View>

    </View>
  );
}

// ==========================================
// APLICATIVO
// ==========================================

export default function App() {

  const [pesquisa, setPesquisa] = useState('');

  const [categoria, setCategoria] = useState('Todos');

  // Filtrando produtos
  const produtosFiltrados = produtos.filter((produto) => {

    const nomeEncontrado = produto.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    const categoriaEncontrada =
      categoria === 'Todos' ||
      produto.categoria === categoria;

    return nomeEncontrado && categoriaEncontrada;
  });

  return (
    <SafeAreaView style={styles.container}>

      <FlatList

        data={produtosFiltrados}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <ProdutoCard produto={item} />
        )}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.lista}

        ListHeaderComponent={

          <View>

            {/* =========================
                CABEÇALHO
            ========================= */}

            <View style={styles.header}>

              <View>
                <Text style={styles.logo}>
                  🍔 LANCHES & CIA
                </Text>

                <Text style={styles.slogan}>
                  O sabor que você merece!
                </Text>
              </View>

              <View style={styles.carrinho}>
                <Text style={styles.carrinhoTexto}>
                  🛒
                </Text>
              </View>

            </View>

            {/* =========================
                BANNER
            ========================= */}

            <View style={styles.banner}>

              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=900',
                }}
                style={styles.bannerImagem}
              />

              <View style={styles.bannerTexto}>

                <Text style={styles.bannerTitulo}>
                  🍔 Hambúrguer especial
                </Text>

                <Text style={styles.bannerSubtitulo}>
                  Peça agora e aproveite!
                </Text>

              </View>

            </View>

            {/* =========================
                PESQUISA
            ========================= */}

            <View style={styles.pesquisaContainer}>

              <Text style={styles.iconePesquisa}>
                🔎
              </Text>

              <TextInput
                value={pesquisa}
                onChangeText={setPesquisa}
                placeholder="Pesquisar produto..."
                placeholderTextColor="#999"
                style={styles.input}
              />

            </View>

            {/* =========================
                CATEGORIAS
            ========================= */}

            <Text style={styles.tituloSecao}>
              Categorias
            </Text>

            <View style={styles.categorias}>

              {[
                'Todos',
                'Lanches',
                'Combos',
                'Acompanhamentos',
                'Bebidas',
              ].map((item) => (

                <TouchableOpacity
                  key={item}
                  onPress={() => setCategoria(item)}

                  style={[
                    styles.categoria,

                    categoria === item &&
                      styles.categoriaSelecionada,
                  ]}
                >

                  <Text
                    style={[
                      styles.categoriaTexto,

                      categoria === item &&
                        styles.categoriaTextoSelecionada,
                    ]}
                  >
                    {item}
                  </Text>

                </TouchableOpacity>

              ))}

            </View>

            {/* =========================
                TÍTULO
            ========================= */}

            <View style={styles.tituloListaContainer}>

              <Text style={styles.tituloSecao}>
                Nosso cardápio
              </Text>

              <Text style={styles.quantidade}>
                {produtosFiltrados.length} itens
              </Text>

            </View>

          </View>
        }

        ListEmptyComponent={

          <View style={styles.semResultado}>

            <Text style={styles.semResultadoEmoji}>
              😕
            </Text>

            <Text style={styles.semResultadoTexto}>
              Nenhum produto encontrado
            </Text>

            <Text style={styles.semResultadoSubtexto}>
              Tente pesquisar outro produto.
            </Text>

          </View>
        }

        ListFooterComponent={

          <View style={styles.footer}>

            <Text style={styles.footerEmoji}>
              🍔
            </Text>

            <Text style={styles.footerTitulo}>
              Lanches & Cia
            </Text>

            <Text style={styles.footerTexto}>
              Feito com carinho para você!
            </Text>

          </View>
        }

      />

    </SafeAreaView>
  );
}

// ==========================================
// ESTILOS
// ==========================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  lista: {
    paddingBottom: 30,
  },

  // HEADER

  header: {
    backgroundColor: '#e63946',

    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
  },

  slogan: {
    color: '#ffe8e8',
    fontSize: 13,
    marginTop: 4,
  },

  carrinho: {
    width: 45,
    height: 45,

    backgroundColor: '#ffffff',

    borderRadius: 23,

    justifyContent: 'center',
    alignItems: 'center',
  },

  carrinhoTexto: {
    fontSize: 22,
  },

  // BANNER

  banner: {
    height: 190,

    margin: 20,

    borderRadius: 18,

    overflow: 'hidden',

    backgroundColor: '#222',
  },

  bannerImagem: {
    width: '100%',
    height: '100%',
  },

  bannerTexto: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    padding: 18,

    backgroundColor: 'rgba(0,0,0,0.65)',
  },

  bannerTitulo: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: 'bold',
  },

  bannerSubtitulo: {
    color: '#eeeeee',
    fontSize: 14,
    marginTop: 4,
  },

  // PESQUISA

  pesquisaContainer: {
    height: 50,

    marginHorizontal: 20,

    backgroundColor: '#ffffff',

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#dddddd',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,
  },

  iconePesquisa: {
    fontSize: 19,
    marginRight: 10,
  },

  input: {
    flex: 1,

    color: '#222',

    fontSize: 15,
  },

  // SEÇÕES

  tituloSecao: {
    fontSize: 21,

    fontWeight: 'bold',

    color: '#222',

    marginLeft: 20,
    marginTop: 22,
    marginBottom: 12,
  },

  // CATEGORIAS

  categorias: {
    flexDirection: 'row',

    paddingHorizontal: 20,

    gap: 8,

    flexWrap: 'wrap',
  },

  categoria: {
    backgroundColor: '#ffffff',

    paddingHorizontal: 14,
    paddingVertical: 9,

    borderRadius: 20,

    borderWidth: 1,
    borderColor: '#dddddd',

    marginBottom: 5,
  },

  categoriaSelecionada: {
    backgroundColor: '#e63946',

    borderColor: '#e63946',
  },

  categoriaTexto: {
    color: '#666',

    fontSize: 13,

    fontWeight: '600',
  },

  categoriaTextoSelecionada: {
    color: '#ffffff',
  },

  // TÍTULO DA LISTA

  tituloListaContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingRight: 20,
  },

  quantidade: {
    color: '#999',

    fontSize: 13,

    marginTop: 22,
  },

  // CARD

  card: {
    height: 145,

    marginHorizontal: 20,

    marginBottom: 14,

    backgroundColor: '#ffffff',

    borderRadius: 15,

    overflow: 'hidden',

    flexDirection: 'row',

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,

    shadowRadius: 5,
  },

  imagem: {
    width: 120,

    height: 145,
  },

  info: {
    flex: 1,

    padding: 13,

    justifyContent: 'space-between',
  },

  nome: {
    color: '#222',

    fontSize: 18,

    fontWeight: 'bold',
  },

  descricao: {
    color: '#777',

    fontSize: 12,

    lineHeight: 17,

    marginTop: 3,
  },

  rodapeCard: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  preco: {
    color: '#e63946',

    fontSize: 17,

    fontWeight: 'bold',
  },

  notaContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  estrela: {
    color: '#f4b400',

    fontSize: 18,

    marginRight: 4,
  },

  nota: {
    color: '#555',

    fontWeight: 'bold',

    fontSize: 13,
  },

  // SEM RESULTADO

  semResultado: {
    alignItems: 'center',

    paddingTop: 40,

    paddingHorizontal: 20,
  },

  semResultadoEmoji: {
    fontSize: 45,
  },

  semResultadoTexto: {
    fontSize: 18,

    fontWeight: 'bold',

    color: '#333',

    marginTop: 10,
  },

  semResultadoSubtexto: {
    color: '#888',

    marginTop: 5,
  },

  // FOOTER

  footer: {
    alignItems: 'center',

    marginTop: 25,

    paddingTop: 20,

    borderTopWidth: 1,

    borderTopColor: '#ddd',
  },

  footerEmoji: {
    fontSize: 30,
  },

  footerTitulo: {
    fontSize: 17,

    fontWeight: 'bold',

    color: '#e63946',

    marginTop: 5,
  },

  footerTexto: {
    color: '#999',

    fontSize: 12,

    marginTop: 3,
  },

});