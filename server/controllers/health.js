export const health = async (req, res) => {
  try {
    res.status(200).json({ status: "UP" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
