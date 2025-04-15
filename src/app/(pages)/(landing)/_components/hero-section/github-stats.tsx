import { Card, CardContent } from "@/components/base/card";
import Image from "next/image";
import Link from "next/link";

const GithubStats = () => {
  return (
    <Card>
      <CardContent className="min-h-44 p-3 sm:p-6">
        <Link href={"https://github.com/jrTilak"} target="_blank" rel="noopener noreferrer">
          <img
            title="jrtilak"
            className="w-full"
            src="https://ghchart.rshah.org/56d364/jrtilak"
            alt="GitHub Contributions"
          />
        </Link>{" "}
      </CardContent>
    </Card>
  );
};

export default GithubStats;
