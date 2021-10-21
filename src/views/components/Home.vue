<template>
  <div class='bg'>
    <v-card class='mx-auto mt-10' max-width='90%' outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class='text-overline mb-4'>
            Programa de benefícios AMBEV
          </div>
          <v-list-item-title class='text-h3 mb-1'>
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle class='text-h4'
            >{{ user.balance }} CRÉDITOS</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar class='ma-10' size='120'>
          <img :src='Leonardo' alt='' />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="d-block">
        <v-row class="mt-10 justify-center">
            <v-data-table
                style='width: 80%'
                :headers='headers'
                :items='desserts'
                :items-per-page='5'
                class='elevation-1'
            ></v-data-table>
        </v-row>
        <v-row class="mb-5 mt-5 justify-center">
            <v-btn
            class="mx-2"
            fab
            dark
            color="teal"
            >
            <v-icon dark>
                mdi-format-list-bulleted-square
            </v-icon>
            </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Leonardo from '../../assets/leonardo.jpg';

export default {
  data() {
    return {
      Leonardo,
      user: { name: 'Leonardo de Carvalho', balance: 12800 },
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Local', value: 'local' },
        { text: 'Localidade', value: 'localidade' },
        { text: 'Última atualização', value: 'atualizacao' },
        { text: 'Quantidade', value: 'qtd' },
      ],
      desserts: [
        {
          id: 1,
          local: 'Bar do Zeca',
          localidade: 'Rua João Francisco, 38 - 30494-123 Belo Horizonte',
          atualizacao: '04/30/19 10:03',
          qtd: 2400,
        },
        {
          id: 2,
          local: 'Supermercados BH',
          localidade: 'Rua João, 1438 - 78892-793 São Paulo',
          atualizacao: '04/30/19 10:03',
          qtd: 250,
        },
        {
          id: 3,
          local: 'Carrefour Bairro',
          localidade: 'Rua Francisco, Loja 2 - Belo Horizonte',
          atualizacao: '04/30/19 10:03',
          qtd: 700,
        },
      ],
    };
  },
};
</script>
<style scoped>
.bg {
  background-color: #081c39;
  max-height: 300px;
}
</style>
