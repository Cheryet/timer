 //Beep sound

let times = process.argv.slice(2)

const timer = () => {
  for (let time of times){
    if (time > 0){
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    };
  };
};

timer();