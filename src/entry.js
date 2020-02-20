setTimeout(() => import('./module-a.js').then(() => console.log('A loaded!')), 5000)
setTimeout(() => import('./module-b.js').then(() => console.log('B loaded!')), 2000)
