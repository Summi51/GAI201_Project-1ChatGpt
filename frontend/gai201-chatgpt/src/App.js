import { Button, Select, Text, Textarea, VStack } from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";

function App() {
  const [gen, setGen] = useState("default");

  const [data, setData] = useState("");

  const handleGenTemplate = () => {
    axios
      .post(`https://gai-201-server-kwyq.vercel.app/story/${gen}`)

      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((error) => {
        console.error(error);

        setData("Error story is not genrate");
      });
  };

  return (
    <VStack
      align="center"
      bgGradient="linear(pink, teal.300, blue.400)"
      spacing={4}
      p={8}
      borderRadius="md"
    >
      <Text fontWeight={600} fontSize="25px" color="purple.600">
        Story Generate Ramdomly
      </Text>


      <Select w="50%" onChange={(e) => setGen(e.target.value)} bg="white">
        <option value="fantasy">Fantasy</option>
        <option value="fairytales">Fairytales</option>
        <option value="motivational">Motivational</option>
      </Select>

      <Button onClick={handleGenTemplate} bg="purple.600" color="white">
        Generate
      </Button>

      {data && (
        <Textarea
          value={data}
          rows={data.split("\n").length}
          bg="white"
          color="gray.800"
          readOnly
          resize="none"
          width="50%"
          textAlign="left"
          borderRadius="md"
          boxShadow="sm"
          p={3}
          style={{ backgroundColor: "white", color: "purple.600" }}
        />
      )}
    </VStack>
  );
}

export default App;
