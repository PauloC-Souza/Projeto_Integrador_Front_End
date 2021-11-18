<template>
  <div>
    <v-card
      id="dashboard"
      max-height="374"
    >
    <v-card-title>
    <h1 class="font-weight-bold white--text pl-2"> ambev </h1>
    </v-card-title>

    <v-card-title >
    <h1 class="font-weight-bold white--text ml-10"> Parceiros </h1>
    </v-card-title>
    <v-row justify="end">
      <v-col cols="1" sm="1" text-align="end" class="px-0" >
        <v-btn>
          <v-icon>mdi-cog</v-icon>
      </v-btn>
      </v-col>
      <v-col cols="12" sm="2">
        <v-btn>Adicionar
        <v-icon>mdi-download</v-icon>
      </v-btn>
      </v-col>
    </v-row>
    <v-row  class="mx-8 my-1" id="card">
      <v-col>
        <v-expansion-panels focusable multiple readonly v-model="painel">
            <v-expansion-panel class="mb-5">
                <v-expansion-panel-header class="panel-header-class" expand-icon="">
                    <h3 class="pt-0" :style="`color: #686868`"> {{ 'DashBoard' }}</h3>
                </v-expansion-panel-header>
            <v-expansion-panel-content>
                <template>
                    <v-data-table

                        :loading="loadResultList"
                        :hide-default-footer="loadResultList || headers.length === 0"
                        :hide-default-header="loadResultList || headers.length === 0"
                        :headers="headers"
                        :items="item"
                        class="mr-2"
                        :items-per-page="5"
                    >
                    </v-data-table>
                </template>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        </v-col>
    </v-row>
    </v-card>

  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class DashBoard extends Vue {
    painel= [0];
    loadResultList = false;
    headers = [
    {
      text: 'ID',
      align: 'left',
      value: 'id',
      width: '20%'
    },
    {
      text: 'Status',
      align: 'left',
      value: 'status',
      width: '20%'
    },
    {
      text: 'Nome',
      align: 'left',
      value: 'nome',
      width: '20%'
    },
    {
      text: 'Localização',
      align: 'left',
      value: 'localizacao',
      width: '20%'
    },
    {
      text: 'Última atualização',
      align: 'left',
      value: 'ultimaAtualizacao',
      width: '20%'
    },
    {
      text: 'Quantidade',
      align: 'left',
      value: 'quantidade',
      width: '20%'
    }];
    

}
</script>

<style scoped>
#dashboard{
  background-color:#081C39;
}
#card{
  min-height: 350px;
}
#button{
   text-align:"right";
}
</style>
