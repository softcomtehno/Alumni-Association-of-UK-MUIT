import { Container, Typography } from "~shared/ui";

export const Footer = () => {
  return (
    <Container>
      <div className="max-w-[360px] mb-10">
        <Typography variant="h4" className="text-[#2563EB] mb-3">
          Ассоциация выпускников
        </Typography>
        <p>
          Объединение выпускников Университетскогокомплекса Международно
          гоуниверситета инновационных технологий
        </p>
      </div>
    </Container>
  );
};
