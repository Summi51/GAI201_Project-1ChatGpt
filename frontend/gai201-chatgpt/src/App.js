import { Button, Select, Text, Textarea, VStack } from "@chakra-ui/react";

import axios from "axios";

import { useState } from "react";

function App() {
  const [gen, setGen] = useState("");

  const [data, setData] = useState("");

  const handleGenTemplate = () => {

    axios
      .post(`https://gai-201-server-kwyq.vercel.app/story/${gen}`)

      .then((res) => {

       // console.log(res.data);

        setData(res.data);

      })
      .catch((error) => {

        console.error(error);

        setData("Error story is not genrate");
      });
  };

  return (
    <VStack
      spacing={4}

      align="center"

      bgGradient="linear(pink, teal.300, blue.400)"

      p={8}
      
      borderRadius="md"
    >
      <Text fontWeight={600} fontSize="25px" color="purple.600">
      Story Generate Ramdomly
      </Text>
      <Select w="50%" onChange={(e) => setGen(e.target.value)} bg="white">
        <option value="fairytales">Fairytales</option>
        <option value="fantasy">Fantasy</option>
        <option value="motivational">Motivational</option>
      </Select>
      <Button onClick={handleGenTemplate} bg="purple.600" color="white">
        Generate
      </Button>
      {data && (
        <Textarea
          value={data}
          rows={data.split("\n").length}
          readOnly
          resize="none"
          width="50%"
          textAlign="left"
          bg="white"
          color="gray.800"
          borderRadius="md"
          boxShadow="sm"
          p={2}
          style={{ backgroundColor: "#f8f8f8", color: "rgb(107,70,193)" }}
        />
      )}
    </VStack>
  );
}

export default App;
