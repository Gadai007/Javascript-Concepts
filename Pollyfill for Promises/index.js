class CustomPromise {
    constructor(executor){
        this.value = null
        this.onFullFilled = null
        this.isFullFilled = false

        const onResolve = (value) => {
            this.value = value
            this.isFullFilled = true
            if(typeof this.onFullFilled === 'function'){
                this.onFullFilled(this.value)
            }
        } 
        executor(onResolve)
    }

    then(cb){
        this.onFullFilled = cb
        if(this.isFullFilled){
            this.onFullFilled(this.value)
        }
    }
}

const promise = new CustomPromise((resolve) => resolve("Hello")).then((data) =>
  console.log(data)
);
