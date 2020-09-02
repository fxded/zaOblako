const delayAndGetRandom = (ms):Promise<number|string> => {
  return new Promise((resolve, reject) => setTimeout(() => {
      const val = Math.trunc(Math.random() * 100);
      if (val < 70) {
          resolve(val);
      } else {
          reject('is too big');
      }
    }, ms)
  );
};
 
async function fn():Promise<number|string> {
try {
    const a:number = await 9;
    const b:any = await delayAndGetRandom(500);
    const c:number = await 5;
    await delayAndGetRandom(500);
    const result:number|string = await a + b * c;
    return result;
  } catch (e) {
      return e;
  }
}

fn().then(console.log);






















/*let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

function loadJson(url) {
    return fetch(url)
        .then (response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error((response.status).toString());
            }
        })
} 

loadJson('no-such-user.json')
    .catch(alert);
    */

