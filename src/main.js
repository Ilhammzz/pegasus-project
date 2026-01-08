import { createApp } from 'vue';
import './assets/css/font-awesome.css';
import './assets/css/normalize.css';
import './assets/css/responsive.css';
import router from './router'
import { createPinia } from 'pinia';
import App from './App.vue'
import configureAxios from './axios-config';

import BaseButton from './components/ui-elements/BaseButton.vue'
import BaseCard from './components/ui-elements/BaseCard.vue';
import BaseFilterContainer from './components/ui-elements/BaseFilterContainer.vue';
import BaseLabeledItem from './components/ui-elements/BaseLabeledItem.vue';
import BaseDoubleColumnCard from './components/ui-elements/BaseDoubleColumnCard.vue'
import BaseButtonContainer from './components/ui-elements/BaseButtonContainer.vue';
import BasePagination from './components/ui-elements/BasePagination.vue';
import BaseTextSearch from './components/ui-elements/BaseTextSearch.vue';
import BaseDateSearch from './components/ui-elements/BaseDateSearch.vue';
import BaseDropdownSearch from './components/ui-elements/BaseDropdownSearch.vue';
import BaseDialog from './components/ui-elements/BaseDialog.vue';
import BaseNumberInput from './components/ui-elements/BaseNumberInput.vue';
import BaseDateInput from './components/ui-elements/BaseDateInput.vue';
import BaseDeleteDialog from './components/ui-elements/BaseDeleteDialog.vue';
import BaseTable from './components/ui-elements/BaseTable.vue';
import BaseTextInput from './components/ui-elements/BaseTextInput.vue';
import BaseDropdownInput from './components/ui-elements/BaseDropdownInput.vue';
import BaseTitle from './components/ui-elements/BaseTitle.vue';
import BaseDateTimeInput from './components/ui-elements/BaseDateTimeInput.vue';
import BaseTextArea from './components/ui-elements/BaseTextArea.vue'
import BaseLogo from './components/ui-elements/BaseLogo.vue';

const app = createApp(App);
const pinia  = createPinia();
app.use(pinia);
configureAxios();
app.use(router);


app.component('base-button', BaseButton);
app.component('base-logo', BaseLogo);
app.component('base-button-container', BaseButtonContainer);
app.component('base-card', BaseCard);
app.component('base-table', BaseTable);
app.component('base-title', BaseTitle);
app.component('base-pagination', BasePagination);
app.component('base-filter-container', BaseFilterContainer);
app.component('base-labeled-item', BaseLabeledItem);
app.component('base-double-column-card', BaseDoubleColumnCard);
app.component('base-text-search', BaseTextSearch);
app.component('base-text-input', BaseTextInput);
app.component('base-date-search', BaseDateSearch);
app.component('base-date-input', BaseDateInput);
app.component('base-date-time-input', BaseDateTimeInput);
app.component('base-dropdown-search', BaseDropdownSearch);
app.component('base-dropdown-input', BaseDropdownInput);
app.component('base-dialog', BaseDialog);
app.component('base-delete-dialog', BaseDeleteDialog);
app.component('base-number-input', BaseNumberInput);
app.component('base-text-area', BaseTextArea);

app.mount('#app');

