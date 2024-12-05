app.post('/receive', async (req, res) => {
    const { receiverEmail, item, quantity, donor } = req.body;
  
    try {
      // Find the receiver in the database
      const receiver = await User.findOne({ email: receiverEmail });
      if (!receiver) return res.status(404).json({ message: 'Receiver not found' });
  
      // Create a new history record for the receipt
      const receipt = new History({
        userId: receiver._id,
        type: 'receipt',
        item,
        quantity,
        relatedUser: donor,
      });
  
      await receipt.save(); // Save the receipt record
      res.status(200).json({ message: 'Receipt logged successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error logging receipt', details: err });
    }
  });
  