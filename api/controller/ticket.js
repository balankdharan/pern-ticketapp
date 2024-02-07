const pool = require("../../db");

exports.addTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const newTicket = await pool.query(
      "INSERT INTO tickets (title, description, status) VALUES ($1,$2,$3) RETURNING *",
      [title, description, status]
    );
    res.status(201).json(newTicket.rows[0]);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM tickets");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getSpecificTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM tickets WHERE id =$1", [
      id,
    ]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const udpateTicket = await pool.query(
      "UPDATE tickets SET status = $1 WHERE id =$2 RETURNING *",
      [status, id]
    );
    res.json(udpateTicket.rows[0]);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tickets WHERE id =$1", [id]);
    res.json({
      message: "Deleted the record",
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
