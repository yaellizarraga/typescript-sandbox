export interface IConfig {
    color: String;
    user: String;
}

const fibonacci: any = (n: number) => {
    let a: number = 0;
    let b: number = 1;
    for (let x = 0; x < n; x++) {
        let tmp = a;
        a = b;
        b = tmp + b;
        console.log(a);
    }
};

const main = async (config: IConfig) => {
    console.log(config);
    fibonacci(10);
};


const config: IConfig = {
    color: 'GREEN',
    user: 'yaellizarraga'
};

main(config);