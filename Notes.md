## Redux tutorial

#### Console tests:

store.getState();
// output: {articles: Array(0)}

store.subscribe(() => console.log('Look ma, Redux!!'));

store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );


store.getState();
// output: {articles: Array(1)}

https://www.valentinog.com/blog/redux/