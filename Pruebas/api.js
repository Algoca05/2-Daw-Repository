app.get('/api/vinilos', (req, res) => {
    db.query('SELECT * FROM vinilos', (err, results) => {
        if (err) {
            console.error('Error al obtener vinilos:', err);
            res.status(500).json({ error: 'Error al obtener vinilos' });
        } else {
            res.json({ users: results });
        }
    });
});

// Ruta para obtener un vinilo por su ID
app.get('/api/vinilos/:id', (req, res) => {
    const vinilosId = req.params.id;
    db.query('SELECT * FROM vinilos WHERE id_vinilo = ?', [vinilosId], (err, results) => {
      if (err) {
        console.error('Error al obtener el vinilo:', err);
        res.status(500).json({ error: 'Error al obtener el vinilo' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ message: 'Vinilo no encontrado' });
        } else {
          res.json({ user: results[0] });
        }
      }
    });
  });

// Ruta para crear un nuevo vinilo
app.post('/api/vinilos', (req, res) => {
    const newVinilo = req.body;
    db.query('INSERT INTO vinilos (nombre, artista, precio, lanzamiento_año, descripcion, url_imagen) VALUES (?, ?, ?, ?, ?, ?)', [newVinilo.nombre, newVinilo.artista, newVinilo.precio, newVinilo.lanzamiento_año, newVinilo.descripcion, newVinilo.url_imagen], (err, results) => {
        if (err) {
        console.error('Error al crear el vinilo:', err);
        res.status(500).json({ error: 'Error al crear el vinilo' });
      } else {
        res.json({ message: 'Vinilo creado con éxito', user: newVinilo });
      }
    });
  });

// Ruta para actualizar un vinilo por su id
app.put('/api/vinilos/:id', (req, res) => {
    const vinilosId = req.params.id;
    const updatedVinilo = req.body;
    db.query('UPDATE vinilos SET nombre = ?, artista = ?, precio = ?, lanzamiento_año = ?, descripcion = ?, url_imagen = ? WHERE id_vinilo = ?', [updatedVinilo.nombre, updatedVinilo.artista, updatedVinilo.precio, updatedVinilo.lanzamiento_año, updatedVinilo.descripcion, updatedVinilo.url_imagen, vinilosId], (err, results) => {
      if (err) {
        console.error('Error al actualizar el vinilo:', err);
        res.status(500).json({ error: 'Error al actualizar el vinilo' });
      } else {
        res.json({ message: 'Vinilo actualizado con éxito', user: updatedVinilo });
      }
    });
  });

  // Ruta para eliminar un vinilo por su ID
app.delete('/api/vinilos/:id', (req, res) => {
    const vinilosId = req.params.id;
    db.query('DELETE FROM vinilos WHERE id_vinilo = ?', [vinilosId], (err, results) => {
      if (err) {
        console.error('Error al eliminar el vinilo:', err);
        res.status(500).json({ error: 'Error al eliminar el vinilo' });
      } else {
        res.json({ message: 'Vinilo eliminado con éxito' });
      }
    });
  });
  
// Ruta para escuchar el puerto de la API
app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
