import { graph, config, connector } from "@grafbase/sdk";

const g = graph.Standalone();
const pg = connector.Postgres("pg", { url: g.env("POSTGRES_URL") });

g.datasource(pg);

export default config({ graph: g, auth: { rules: (rules) => rules.public() } });
