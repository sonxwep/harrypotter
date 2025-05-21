// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Герои Гарри Поттера</title>
//     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Hatty+Potter&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>
// <div id="app">
//     <div style="display: flex; justify-content: space-between; align-items: center;">
//         <h1>Harry Potter's heroes</h1>
//         <div>
//             <span>Избранное: {{favoriteCount}}</span><br>
//             <span v-if="userName">Привет, {{ userName }}</span>
//             <button class="btn" @click="openDialogAvto">Авторизация</button>
//             <button class="btn" @click="openDialogreg">Регистрация</button>
//         </div>
//     </div>
//     <!-- Авторизация -->
//     <dialog :open="openAvto">
//         <form @submit.prevent="avto">
//             <strong>Введите логин:</strong>
//             <input type="text" class="input" placeholder="Введите логин" v-model="login">
//             <strong>Введите пароль:</strong>
//             <input type="password" class="input" placeholder="Введите пароль" v-model="password">
//             <button class="btn-form" type="submit">Авторизация</button>
//         </form>
//     </dialog>
//     <!-- Регистрация -->
//     <dialog :open="openReg">
//         <form @submit.prevent="reg">
//             <strong>Введите имя:</strong>
//             <input type="text" class="input" placeholder="Введите имя" v-model="firstName">
//             <strong>Введите фамилию:</strong>
//             <input type="text" class="input" placeholder="Введите фамилию" v-model="lastName">
//             <strong>Введите отчество:</strong>
//             <input type="text" class="input" placeholder="Введите отчество" v-model="middleName">
//             <strong>Введите логин:</strong>
//             <input type="text" class="input" placeholder="Введите логин" v-model="login">
//             <strong>Введите пароль:</strong>
//             <input type="password" class="input" placeholder="Введите пароль" v-model="password">
//             <strong>Введите номер телефона:</strong>
//             <input type="text" class="input" placeholder="8(XXX)XXX-XX-XX" v-model="phone">
//             <strong>Выберите пол:</strong>
//             <div>
//                 <input type="radio" name="gen" id="m" value="Мужской" v-model="gender">
//                 <label for="m">Мужской</label>
//                 <input type="radio" name="gen" id="w" value="Женский" v-model="gender">
//                 <label for="w">Женский</label>
//             </div>
//             <strong>Возраст:</strong>
//             <input type="number" class="input" placeholder="Введите возраст" v-model="age">
//             <strong>Любимый факультет:</strong>
//             <div>
//                 <input type="checkbox" id="gryffindor" value="Гриффиндор" v-model="favoriteHouses">
//                 <label for="gryffindor">Гриффиндор</label>
//                 <input type="checkbox" id="ravenclaw" value="Когтевран" v-model="favoriteHouses">
//                 <label for="ravenclaw">Когтевран</label>
//                 <input type="checkbox" id="hufflepuff" value="Пуффендуй" v-model="favoriteHouses">
//                 <label for="hufflepuff">Пуффендуй</label>
//                 <input type="checkbox" id="slytherin" value="Слизерин" v-model="favoriteHouses">
//                 <label for="slytherin">Слизерин</label>
//             </div>
//             <button class="btn-form" type="submit">Регистрация</button>
//         </form>
//     </dialog>
//     <div class="container1">
//         <div>
//             <input type="text" v-model="searchQuery" placeholder="Поиск по имени или актеру" />
            
//             <select v-model="sortBy">
//                 <option value="">Сортировать по</option>
//                 <option value="name">Имя</option>
//                 <option value="dateOfBirth">Дата рождения</option>
//             </select>
            
//             <select v-model="sortOrder">
//                 <option value="asc">По возрастанию</option>
//                 <option value="desc">По убыванию</option>
//             </select>
            
//             <select v-model="filterHouse">
//                 <option value="">Факультет</option>
//                 <option value="Gryffindor">Гриффиндор</option>
//                 <option value="Slytherin">Слизерин</option>
//                 <option value="Hufflepuff">Пуффендуй</option>
//                 <option value="Ravenclaw">Когтевран</option>
//             </select>
//             <select v-model="filterGender">
//                 <option value="">Пол</option>
//                 <option value="male">Мужской</option>
//                 <option value="female">Женский</option>
//             </select>
            
//             <!-- <select v-model="filterAlive">
//                 <option value="">Жи</option>
//                 <option value="true">Живой</option>
//                 <option value="false">Не живой</option>
//             </select> -->
            
//             <button @click="resetFilters">Сбросить фильтры</button>
//         </div>
//     </div>
//     <div v-if="error" class="error">{{ error }}</div>
//     <div v-for="hero in filteredHeroes" class="spisok" :key="hero.id" @click="openModal(hero)">
//         <img :src="hero.image" :alt="hero.name">
//         <div class="hero-info">
//             <h2>{{ hero.name }}</h2>
//             <div><strong>ID: </strong>{{ hero.id }}</div>
//             <div><strong>Gender: </strong>{{ hero.gender }}</div>
//             <div><strong>House: </strong>{{ hero.house }}</div>
//             <div><strong>Birthday: </strong>{{ hero.dateOfBirth }}</div>
//             <div><strong>Alive: </strong>{{ hero.alive ? 'Да' : 'Нет' }}</div>
//             <div><strong>Eye color: </strong>{{ hero.eyeColour }}</div>
//             <div><strong>Hair color: </strong>{{ hero.hairColour }}</div>
//             <div><strong>Actor: </strong>{{ hero.actor }}</div>
//             <button @click.stop="toggleFavorite(hero)">
//                 {{ isFavorite(hero) ? 'Удалить из избранного' : 'Добавить в избранное' }}
//             </button>
//         </div>
//     </div>
//     <div id="modal" class="modal" v-if="selectedHero">
//         <div class="modal-content">
//             <span class="close" @click="closeModal">&times;</span>
//             <h2>{{ selectedHero.name }}</h2>
//             <div><strong>ID: </strong>{{ selectedHero.id }}</div>
//             <div><strong>Gender: </strong>{{ selectedHero.gender }}</div>
//             <div><strong>House: </strong>{{ selectedHero.house }}</div>
//             <div><strong>Birthday: </strong>{{ selectedHero.dateOfBirth }}</div>
//             <div><strong>Alive: </strong>{{ selectedHero.alive ? 'Да' : 'Нет' }}</div>
//             <div><strong>Eye color: </strong>{{ selectedHero.eyeColour }}</div>
//             <div><strong>Hair color: </strong>{{ selectedHero.hairColour }}</div>
//             <div><strong>Actor: </strong>{{ selectedHero.actor }}</div>
//             <!-- <button @click.stop="toggleFavorite(selectedHero)">
//                 {{ isFavorite(selectedHero) ? 'Удалить из избранного' : 'Добавить в избранное' }}
//             </button> -->
//             <img :src="selectedHero.image" :alt="selectedHero.id">
//         </div>
//     </div>
// </div>
//    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <script src="./1.js"></script>
// </body>
// </html>
    
// const App = {
//     data() {
//         return {
//             firstName: '',
//             lastName: '',
//             middleName: '',
//             login: '',
//             password: '',
//             phone: '',
//             gender: '',
//             age: null,
//             favoriteHouses: [],
//             userName: '', // Для хранения имени пользователя после авторизации
//             openReg: false, // открыто или закрыто окно регистрации
//             openAvto: false, // открыто или закрыто окно авторизации
//             heroes: [],
//             selectedHero: null,
//             error: null,
//             searchQuery: '',
//             sortBy: '',
//             sortOrder: 'asc',
//             filterHouse: '',
//             filterGender: '',
//             filterAlive: '',
//             favorites: [] // Массив для хранения избранных героев
//         }
//     },
//     computed: {
//         favoriteCount() {
//             return this.favorites.length; // Количество избранных героев
//         },
//         filteredHeroes() {
//             let filtered = this.heroes;
//             // Фильтрация по имени и актеру
//             if (this.searchQuery) {
//                 const query = this.searchQuery.toLowerCase();
//                 filtered = filtered.filter(hero => 
//                     hero.name.toLowerCase().includes(query) || 
//                     hero.actor.toLowerCase().includes(query)
//                 );
//             }
//             // Фильтрация по дому
//             if (this.filterHouse) {
//                 filtered = filtered.filter(hero => hero.house === this.filterHouse);
//             }
//             // Фильтрация по полу
//             if (this.filterGender) {
//                 filtered = filtered.filter(hero => hero.gender === this.filterGender);
//             }
//             // Фильтрация по статусу
//             if (this.filterAlive !== '') {
//                 filtered = filtered.filter(hero => String(hero.alive) === this.filterAlive);
//             }
//             // Сортировка
//             if (this.sortBy) {
//                 filtered.sort((a, b) => {
//                     let modifier = this.sortOrder === 'asc' ? 1 : -1;
//                     if (a[this.sortBy] < b[this.sortBy]) return -1 * modifier;
//                     if (a[this.sortBy] > b[this.sortBy]) return 1 * modifier;
//                     return 0;
//                 });
//             }
//             return filtered;
//         }
//     },
//      methods: {
//         // открытие окна для регистрации
//         openDialogreg() {
//             this.openReg = true;
//         },
//         // закрытие окна регистрации
//         closeDialogReg() {
//             this.openReg = false;
//         },
//         // открытие окна для авторизации
//         openDialogAvto() {
//             this.openAvto = true;
//         },
//         // закрытие окна авторизации
//         closeDialogAvto() {
//             this.openAvto = false;
//         },
//         // регистрация
//         reg() {
//             // Проверки
//             const nameRegex = /^[А-ЯЁ][а-яё]+$/; // ФИО с заглавной буквы
//             const phoneRegex = /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/; // Формат телефона
//             const ageLimit = 10; // Минимальный возраст
//             if (!nameRegex.test(this.firstName) || this.firstName.length <= 1) {
//                 alert("Имя должно начинаться с заглавной буквы и содержать более одного символа.");
//                 return;
//             }
//             if (!nameRegex.test(this.lastName) || this.lastName.length <= 2) {
//                 alert("Фамилия должна начинаться с заглавной буквы и содержать более двух символов.");
//                 return;
//             }
//             if (!nameRegex.test(this.middleName) || this.middleName.length <= 2) {
//                 alert("Отчество должно начинаться с заглавной буквы и содержать более двух символов.");
//                 return;
//             }
//             if (!phoneRegex.test(this.phone)) {
//                 alert("Номер телефона должен быть в формате 8(XXX)XXX-XX-XX.");
//                 return;
//                  }
//             if (this.age < ageLimit) {
//                 alert("Возраст должен быть не менее 10 лет.");
//                 return;
//             }
//             if (this.gender !== 'Мужской' && this.gender !== 'Женский') {
//                 alert("Пол должен быть 'Мужской' или 'Женский'.");
//                 return;
//             }
//             // Создание объекта пользователя
//             const user = {
//                 firstName: this.firstName,
//                 lastName: this.lastName,
//                 middleName: this.middleName,
//                 login: this.login,
//                 password: this.password,
//                 phone: this.phone,
//                 gender: this.gender,
//                 age: this.age,
//                 favoriteHouses: this.favoriteHouses
//             };
//             // Сохранение пользователя в локальном хранилище
//             localStorage.setItem(this.login, JSON.stringify(user));
//             this.openReg = false; // Закрываем окно регистрации
//             alert("Регистрация успешна!");
//         },
//         // авторизация
//         avto() {
//             const user = JSON.parse(localStorage.getItem(this.login));
//             if (user && user.password === this.password) {
//                 this.userName = `${user.firstName} ${user.lastName} ${user.middleName}`; // Отображаем ФИО
//                 this.openAvto = false; // Закрываем окно авторизации
//                 alert("Авторизация успешна!");
//             } else {
//                 alert("Неверный логин или пароль.");
//             }
//         },
//         async fetchHero() {
//             try {
//                 const res = await fetch('https://hp-api.onrender.com/api/characters');
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await res.json();
//                 this.heroes = data.map(hero => ({
//                     ...hero,
//                     alive: true // Предположим, что все герои живы, если нет информации
//                 }));
//             } catch (error) {
//                 this.error = error.message;
//                 console.error('Fetch error:', error);
//             }
//         },
//         openModal(hero) {
//             this.selectedHero = hero;
//         },
//         closeModal() {
//             this.selectedHero = null;
//         },
//         resetFilters() {
//             this.searchQuery = '';
//             this.sortBy = '';
//             this.sortOrder = 'asc';
//             this.filterHouse = '';
//             this.filterGender = '';
//             this.filterAlive = '';
//         },
//          toggleFavorite(hero) {
//             const index = this.favorites.findIndex(fav => fav.id === hero.id);
//             if (index === -1) {
//                 this.favorites.push(hero); // Добавляем в избранное
//             } else {
//                 this.favorites.splice(index, 1); // Удаляем из избранного
//             }
//         },
//         isFavorite(hero) {
//             return this.favorites.some(fav => fav.id === hero.id); // Проверяем, в избранном ли герой
//         }
//     },
//     mounted() {
//         this.fetchHero();
//     }
// }
// const app = Vue.createApp(App);
// app.mount('#app');
