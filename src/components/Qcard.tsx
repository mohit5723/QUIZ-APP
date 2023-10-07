import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
type Props = {
  numberr: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  callback: any;
};
export function Qcard({
  numberr,
  totalQuestions,
  question,
  answers,
  callback,
}: Props) {
  return (
    <div>
      <Typography variant="h4" color="Red">
        {" "}
        Question : {numberr}/{totalQuestions}
      </Typography>
      <br></br>
      <br></br>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <Card
          variant="outlined"
          style={{
            width: "900px",
            height: "60px",
            backgroundColor: "skyblue",
            padding: "10px",
          }}
        >
          <Typography variant="h5">{question} </Typography>
        </Card>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant={"outlined"}
          style={{
            width: "600px",
            height: "320px",
            backgroundColor: "black",
            padding: "10px",
          }}
        >
          {answers.map((answer) => (
            <OKK answer={answer} callback={callback} />
          ))}
        </Card>
      </div>
    </div>
  );
}

type okkprop = {
  answer: string;
  callback: any;
};
export function OKK({ answer, callback }: okkprop) {
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          width: "600px",
          height: "80px",
        }}
        onClick={() => {
          callback(answer);
        }}
      >
        {" "}
        {answer}
      </Button>
    </div>
  );
}
