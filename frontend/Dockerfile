# Bun を使用したNext.js用Dockerfile（Railway対応）

# ベースイメージ
FROM oven/bun:1-alpine AS base
WORKDIR /app

# プロダクション用依存関係のインストール
FROM base AS deps
# 必要なシステムライブラリを追加
RUN apk add --no-cache libc6-compat

# パッケージファイルをコピー
COPY package.json bun.lockb* ./

# 本番環境の依存関係のみインストール
RUN bun install --frozen-lockfile --production

# ビルド用の依存関係
FROM base AS builder
WORKDIR /app

# すべての依存関係をインストール
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# ソースコードをコピー
COPY . .

# テレメトリを無効化
ENV NEXT_TELEMETRY_DISABLED=1

# アプリケーションをビルド
RUN bun run build

# 本番環境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# ユーザーとグループを作成
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# publicディレクトリをコピー
COPY --from=builder /app/public ./public

# standaloneビルド出力をコピー
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# nextjsユーザーに切り替え
USER nextjs

# ポートを公開
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# アプリケーションを起動
CMD ["node", "server.js"]