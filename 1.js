const App = {
    data() {
        return {
            firstName: '',
            lastName: '',
            middleName: '',
            login: '',
            password: '',
            phone: '',
            gender: '',
            age: null,
            favoriteHouses: [],
            userName: '', 
            openReg: false, 
            openAvto: false, 
            heroes: [],
            selectedHero: null,
            error: null,
            searchQuery: '',
            sortBy: '',
            sortOrder: 'asc',
            filterHouse: '',
            filterGender: '',
            filterAlive: '',
            favorites: [] 
        }
    },
    computed: {
        favoriteCount() {
            return this.favorites.length; 
        },
        filteredHeroes() {
            let filtered = this.heroes;

            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(hero =>
                    hero.name.toLowerCase().includes(query) ||
                    hero.actor.toLowerCase().includes(query)
                );
            }
            // фильтрация по факультету
            if (this.filterHouse) {
                filtered = filtered.filter(hero => hero.house === this.filterHouse);
            }
            // фильтрация по полу
            if (this.filterGender) {
                filtered = filtered.filter(hero => hero.gender === this.filterGender);
            }
            // cортировка
            if (this.sortBy) {
                filtered = filtered.toSorted((a, b) => {
                    let comparison;
                    if (typeof (a[this.sortBy]) === 'number') {
                        comparison = a[this.sortBy] - b[this.sortBy];
                    } else {
                        comparison = a[this.sortBy]?.localeCompare(b[this.sortBy]);
                    }
                    return this.sortOrder === 'asc' ? comparison : -comparison;
                });
            }
            return filtered;
        }
    },
    methods: {
       
        openDialogreg() {
            this.openReg = true;
        },
        
        closeDialogReg() {
            this.openReg = false;
        },
        
        openDialogAvto() {
            this.openAvto = true;
        },
        
        closeDialogAvto() {
            this.openAvto = false;
        },
        // регистрация
        reg() {
            const nameRegex = /^[А-ЯЁ][а-яё]+$/; 
            const phoneRegex = /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/; 
            const ageLimit = 10; 
            if (!nameRegex.test(this.firstName) || this.firstName.length <= 1) {
                alert("Имя должно начинаться с заглавной буквы и содержать более одного символа.");
                return;
            }
            if (!nameRegex.test(this.lastName) || this.lastName.length <= 2) {
                alert("Фамилия должна начинаться с заглавной буквы и содержать более двух символов.");
                return;
            }
            if (!nameRegex.test(this.middleName) || this.middleName.length <= 2) {
                alert("Отчество должно начинаться с заглавной буквы и содержать более двух символов.");
                return;
            }
            if (!phoneRegex.test(this.phone)) {
                alert("Номер телефона должен быть в формате 8(XXX)XXX-XX-XX.");
                return;
            }
            if (this.age < ageLimit) {
                alert("Возраст должен быть не менее 10 лет.");
                return;
            }
            if (this.gender !== 'Мужской' && this.gender !== 'Женский') {
                alert("Пол должен быть 'Мужской' или 'Женский'.");
                return;
            }
            
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                middleName: this.middleName,
                login: this.login,
                password: this.password,
                phone: this.phone,
                gender: this.gender,
                age: this.age,
                favoriteHouses: this.favoriteHouses
            };
            
            localStorage.setItem(this.login, JSON.stringify(user));
            this.openReg = false; 
            alert("Регистрация успешна!");
        },
        // авторизация
        avto() {
            const user = JSON.parse(localStorage.getItem(this.login));
            if (user && user.password === this.password) {
                this.userName = `${user.firstName} ${user.lastName} ${user.middleName}`;
                this.openAvto = false; 
                alert("Авторизация успешна!");
            } else {
                alert("Неверный логин или пароль.");
            }
        },
        async fetchHero() {
            const res = await fetch('https://hp-api.onrender.com/api/characters');
            const data = await res.json();
            this.heroes = data;
        },
        openModal(hero) {
            this.selectedHero = hero;
        },
        closeModal() {
            this.selectedHero = null;
        },
        resetFilters() {
            this.searchQuery = '';
            this.sortBy = '';
            this.sortOrder = 'asc';
            this.filterHouse = '';
            this.filterGender = '';
            this.filterAlive = '';
        },
        toggleFavorite(hero) {
            const index = this.favorites.findIndex(fav => fav.id === hero.id);
            if (index === -1) {
                this.favorites.push(hero); 
            } else {
                this.favorites.splice(index, 1); 
            }
        },
        isFavorite(hero) {
            return this.favorites.some(fav => fav.id === hero.id); 
        }
    },
    mounted() {
        this.fetchHero();
    }
}
const app = Vue.createApp(App);
app.mount('#app');