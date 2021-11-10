const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://carmel11:207855586carmel@cluster0.jtiol.mongodb.net/realEstateAgents?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const AgentSchema = new mongoose.Schema();

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;
