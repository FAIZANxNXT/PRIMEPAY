export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, mobile } = req.body;

    return res.status(200).json({
      message: "PrimePay Register Success ✅",
      user: { name, mobile }
    });
  }

  res.status(405).json({ message: "Method not allowed" });
}
