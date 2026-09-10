 export const studentMixin =  {

        //shared data
        data() {
            return {
                studentName: 'John Doe',
                score: 0
            };
        },

        //shared methods
        methods: {
            increment() {
                this.score++;
            },
            decrement() {
                this.score--;
            },

            reset() {
                this.score = 0;
            }
        }
    }