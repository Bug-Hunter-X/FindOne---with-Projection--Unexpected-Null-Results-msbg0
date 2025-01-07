```javascript
const query = { name: 'John Doe' };

db.collection('users').findOne(query, { projection: { _id: 0, name: 1 } }, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else if (result) {
    console.log('Found:', result);
  } else {
    console.log('Not found');
  }
});
```