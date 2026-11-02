/**
 * NECROLOG — DIGITAL GRAVEYARD APM & CRASH TELEMETRY DASHBOARD
 * Kiroween Hackathon "Costume Contest" Production Engine
 * 
 * Features:
 * 1. Autonomous mock-data generator streaming realistic crashes every 15s.
 * 2. Dynamic Gothic Cemetery View with inline SVG headstones & CSS drifting mist.
 * 3. Phantom Summons Modal with glassmorphism & glowing typewriter terminal.
 * 4. Exorcism physics engine (seismic crumble + ash particle dispersal).
 * 5. Native Web Audio API procedural sound synthesizer.
 * 6. Full keyboard navigation and WCAG high-contrast compliance.
 */

// ==========================================================================
// 1. PROCEDURAL WEB AUDIO SYNTHESIZER (Spooky, Zero External Audio Files)
// ==========================================================================

class NecroAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio not available", e);
    }
  }

  ensureContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Deep stone friction rumble when inspecting a tombstone
  playTombstoneClick() {
    if (!this.enabled || !this.ctx) return;
    this.ensureContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(70, now + 0.35);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // High-frequency typewriter terminal tick
  playTypewriterTick() {
    if (!this.enabled || !this.ctx) return;
    this.ensureContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950 + Math.random() * 200, now);

    gain.gain.setValueAtTime(0.015, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Celestial ascending chime and ghostly wind purge when bug is exorcised
  playExorcismPurge() {
    if (!this.enabled || !this.ctx) return;
    this.ensureContext();

    const now = this.ctx.currentTime;
    
    // Ascending arpeggio chime
    const freqs = [330, 440, 554, 659, 880];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.12, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.6);
    });

    // White noise whoosh
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(800, now + 0.2);
    noiseFilter.frequency.exponentialRampToValueAtTime(200, now + 0.8);
    noiseFilter.Q.value = 3.0;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, now + 0.2);
    noiseGain.gain.linearRampToValueAtTime(0.15, now + 0.4);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start(now + 0.2);
    noise.stop(now + 0.8);
  }

  // Eerie gong/chime when a fresh crash is autonomously spawned
  playSummonAlert(severity) {
    if (!this.enabled || !this.ctx) return;
    this.ensureContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    if (severity === 'CRITICAL') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.6);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.4);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    }

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  }
}

const audio = new NecroAudioEngine();

// ==========================================================================
// 2. INLINE GOTHIC VECTOR ASSETS (No external broken URLs)
// ==========================================================================

const GothicVectors = {
  // Celtic Cross Headstone
  celtic: `
    <svg class="w-full h-auto max-h-36 mx-auto transition-transform duration-300" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="celticGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a2a38"/>
          <stop offset="100%" stop-color="#14141d"/>
        </linearGradient>
      </defs>
      <!-- Stele Body -->
      <path d="M25 155 L25 45 C25 22 40 10 60 10 C80 10 95 22 95 45 L95 155 Z" fill="url(#celticGrad)" stroke="#3f3f58" stroke-width="2"/>
      <!-- Celtic Nimbus Halo Ring -->
      <circle cx="60" cy="50" r="24" stroke="#ff3333" stroke-width="2.5" stroke-dasharray="4 2" opacity="0.8"/>
      <!-- Carved Cross -->
      <path d="M60 25 L60 85 M40 45 L80 45" stroke="#ff3333" stroke-width="4" stroke-linecap="square"/>
      <!-- Surface Fissures / Cracks -->
      <path d="M38 100 L45 110 L41 125 M82 95 L76 108 L80 130" stroke="#121216" stroke-width="1.8"/>
      <!-- Stone Pedestal Base -->
      <rect x="15" y="150" width="90" height="10" rx="3" fill="#1b1b24" stroke="#3f3f58" stroke-width="1.5"/>
    </svg>
  `,

  // Tall Obelisk Spire
  obelisk: `
    <svg class="w-full h-auto max-h-36 mx-auto transition-transform duration-300" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="obeliskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2e2a3d"/>
          <stop offset="100%" stop-color="#151220"/>
        </linearGradient>
      </defs>
      <!-- Pyramidal Top Cap -->
      <polygon points="60,8 35,40 85,40" fill="#3b3254" stroke="#5a4b7d" stroke-width="1.5"/>
      <!-- Shaft -->
      <polygon points="35,40 28,152 92,152 85,40" fill="url(#obeliskGrad)" stroke="#4a3e68" stroke-width="2"/>
      <!-- Glowing Cryptic Runes -->
      <path d="M60 55 L60 70 M53 62 L67 62" stroke="#ff3333" stroke-width="2.5"/>
      <polygon points="60,85 53,98 67,98" stroke="#a855f7" stroke-width="1.8" fill="none"/>
      <path d="M60 110 L60 135 M52 120 L68 120" stroke="#ff3333" stroke-width="2"/>
      <!-- Plinth -->
      <rect x="18" y="150" width="84" height="10" rx="2" fill="#1c182a" stroke="#5a4b7d" stroke-width="1.5"/>
    </svg>
  `,

  // Gothic Arched Stele
  arched: `
    <svg class="w-full h-auto max-h-36 mx-auto transition-transform duration-300" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="archedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a2538"/>
          <stop offset="100%" stop-color="#12101a"/>
        </linearGradient>
      </defs>
      <!-- Pointed Gothic Arch Tombstone -->
      <path d="M22 152 L22 65 Q60 5 98 65 L98 152 Z" fill="url(#archedGrad)" stroke="#473b61" stroke-width="2"/>
      <!-- Inner Gothic Tracery Arch -->
      <path d="M32 145 L32 75 Q60 25 88 75 L88 145" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="3 3"/>
      <!-- Hourglass / Memento Mori Symbol -->
      <polygon points="50,55 70,55 50,75 70,75" stroke="#a855f7" stroke-width="2" fill="none"/>
      <!-- Weathered Stone Fissure -->
      <path d="M38 95 L46 105 L42 120" stroke="#0e0c14" stroke-width="2"/>
      <!-- Base Slab -->
      <rect x="14" y="150" width="92" height="10" rx="3" fill="#191524" stroke="#473b61" stroke-width="1.5"/>
    </svg>
  `,

  // Weathered Ground Slab
  weathered: `
    <svg class="w-full h-auto max-h-36 mx-auto transition-transform duration-300" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="slabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#24282e"/>
          <stop offset="100%" stop-color="#101317"/>
        </linearGradient>
      </defs>
      <!-- Chipped & Tilted Tombstone -->
      <path d="M28 152 L26 48 L35 38 L85 42 L94 52 L92 152 Z" fill="url(#slabGrad)" stroke="#39424e" stroke-width="2"/>
      <!-- Carved Inscription Bar -->
      <rect x="38" y="60" width="44" height="6" rx="2" fill="#1e2229"/>
      <rect x="42" y="72" width="36" height="4" rx="2" fill="#1e2229"/>
      <!-- Creeping Ivy Vines -->
      <path d="M26 120 Q34 110 32 95 Q38 85 44 90" stroke="#00ff66" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.65"/>
      <circle cx="44" cy="90" r="2.5" fill="#00ff66" opacity="0.8"/>
      <!-- Deep Cracks -->
      <path d="M78 45 L68 70 L72 85" stroke="#090a0d" stroke-width="2"/>
      <!-- Soil Pedestal -->
      <rect x="18" y="150" width="84" height="10" rx="2" fill="#15181d" stroke="#39424e" stroke-width="1.5"/>
    </svg>
  `
};

// ==========================================================================
// 3. MOCK DATA STREAMER & REALISTIC CRASH SEEDS
// ==========================================================================

const SEED_INCIDENTS = [
  {
    id: "NECRO-1092",
    timestamp: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
    service: "payment-daemon",
    errorName: "DeadlockDetectedException",
    message: "Transaction tx_994a could not acquire row exclusive lock on tbl_wallets within 30000ms. Aborting transaction cascade to prevent cluster freeze.",
    severity: "CRITICAL",
    tombstoneType: "celtic",
    threadId: "thr-0x7f8a91c0",
    memoryDumpSnippet: "0x7FFF004A: [4D 5A 90 00] LOCK_WAIT_TIMEOUT\n0x7FFF005E: [00 00 00 00] TBL_WALLETS_MUTEX",
    stackTrace: `DeadlockDetectedException: Lock wait timeout exceeded; try restarting transaction
  at PostgresConnection.query (/app/services/db/pool.ts:241:19)
  at async WalletManager.transferFunds (/app/services/payment/wallet.ts:88:9)
  at async PaymentDaemon.processPayoutBatch (/app/workers/payout.ts:142:15)
  at async QueueConsumer.handleMessage (/app/mq/rabbitmq.ts:67:7)`
  },
  {
    id: "NECRO-1093",
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    service: "auth-vault-v2",
    errorName: "BcryptWorkerStarvation",
    message: "0 of 64 Bcrypt hashing workers responding. CPU thread saturation exceeded 99.8%. Auth latency degraded past SLA threshold (14.2s vs 150ms).",
    severity: "CRITICAL",
    tombstoneType: "obelisk",
    threadId: "thr-0x4a9b23f1",
    memoryDumpSnippet: "0x3A20B100: [FF FF FF FF] WORKER_TIMEOUT_SATURATED\n0x3A20B110: [00 40 00 00] QUEUED_TASKS: 14,290",
    stackTrace: `BcryptWorkerStarvation: Thread pool saturation; worker timeout exceeded 10000ms
  at WorkerThreadPool.acquireWorker (/app/node_modules/bcrypt-pool/index.js:52:13)
  at hashPasswordWithSalt (/app/services/security/hasher.go:114)
  at TokenVault.AuthenticateSession (/app/vault/session.go:89)
  at gRPC.UnaryServerInterceptor (/app/transport/grpc.go:42)`
  },
  {
    id: "NECRO-1094",
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    service: "inventory-db",
    errorName: "PostgreSqlPoolExhaustedError",
    message: "Max client connections (500/500) reached. Incoming checkout reservations rejected with HTTP 503 Service Unavailable.",
    severity: "CRITICAL",
    tombstoneType: "celtic",
    threadId: "thr-0x882a01d4",
    memoryDumpSnippet: "0x882A0000: [01 F4 01 F4] POOL_CAPACITY_MAX_500\n0x882A0010: [00 00 00 01] CONNECTION_REJECTED",
    stackTrace: `PostgreSqlPoolExhaustedError: Connection pool is full (size: 500, waiting clients: 312)
  at pg.Pool.connect (/node_modules/pg-pool/index.js:189:11)
  at async InventoryRepository.reserveStock (/app/inventory/repo.ts:45:22)
  at async OrderSaga.executeReservation (/app/sagas/order.ts:112:13)
  at async FastifyInstance.dispatchRoute (/app/server.ts:89:9)`
  },
  {
    id: "NECRO-1095",
    timestamp: new Date(Date.now() - 17 * 60 * 1000).toISOString(),
    service: "order-orchestrator",
    errorName: "KafkaConsumerLagFatal",
    message: "Partition order-events-0 lag surpassed 850,000 messages. Heartbeat loop starvation detected by group coordinator.",
    severity: "WARNING",
    tombstoneType: "arched",
    threadId: "thr-0x11ce904b",
    memoryDumpSnippet: "0x11CE9000: [00 0C F8 50] LAG_METRIC: 850,000\n0x11CE9010: [00 00 00 00] HEARTBEAT_STARVED",
    stackTrace: `KafkaConsumerLagFatal: CommitFailedException: Offset commit cannot be completed
  at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync(ConsumerCoordinator.java:689)
  at com.kiro.order.kafka.OrderEventConsumer.processRecord(OrderEventConsumer.java:114)
  at com.kiro.order.kafka.OrderEventConsumer.run(OrderEventConsumer.java:78)`
  },
  {
    id: "NECRO-1096",
    timestamp: new Date(Date.now() - 22 * 60 * 1000).toISOString(),
    service: "edge-router",
    errorName: "TlsHandshakeCorruptedException",
    message: "Spike of corrupted TLS client hello packets from subnet 198.51.100.0/24. Dropping invalid handshake negotiate attempts.",
    severity: "WARNING",
    tombstoneType: "arched",
    threadId: "thr-0x92f00a29",
    memoryDumpSnippet: "0x92F00000: [16 03 01 00] TLS_RECORD_HEADER_MALFORMED\n0x92F00010: [FF 00 00 00] CIPHER_SUITE_UNKNOWN",
    stackTrace: `TlsHandshakeCorruptedException: SSL23_GET_SERVER_HELLO: unsupported protocol
  at rust_tls::server::ServerSession::read_tls (/src/server/tls.rs:88:17)
  at edge_proxy::ingress::handle_stream (/src/ingress/proxy.rs:204:9)
  at tokio::runtime::task::core::run (/tokio/src/runtime/task/core.rs:188)`
  },
  {
    id: "NECRO-1097",
    timestamp: new Date(Date.now() - 28 * 60 * 1000).toISOString(),
    service: "payment-daemon",
    errorName: "StripeWebhookSignatureVerificationFailed",
    message: "Timestamp outside tolerance window (diff: 420s). Suspected delayed replay or misconfigured network clock synchronization.",
    severity: "WARNING",
    tombstoneType: "arched",
    threadId: "thr-0x3b1180fe",
    memoryDumpSnippet: "0x3B118000: [00 00 01 A4] TIMESTAMP_DRIFT_SEC: 420\n0x3B118010: [00 00 00 00] SIGNATURE_MISMATCH",
    stackTrace: `StripeWebhookSignatureVerificationFailed: Signature header 't=1730590000,v1=...' invalid
  at Stripe.webhooks.constructEvent (/node_modules/stripe/lib/Webhooks.js:68:13)
  at verifyStripePayload (/app/routes/stripe_hooks.ts:31:18)
  at async dispatchWebhook (/app/controllers/billing.ts:94:11)`
  },
  {
    id: "NECRO-1098",
    timestamp: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
    service: "auth-vault-v2",
    errorName: "RedisEvictionPolicyWarning",
    message: "Volatile-LRU session cache memory utilization crossed 91.8%. Purging 2,400 stale pre-auth tokens to maintain headroom.",
    severity: "INFO",
    tombstoneType: "weathered",
    threadId: "thr-0x5f884a12",
    memoryDumpSnippet: "0x5F884000: [00 00 00 5B] MEMORY_USED_PERCENT: 91.8\n0x5F884010: [00 00 09 60] EVICTED_KEYS: 2,400",
    stackTrace: `RedisEvictionPolicyWarning: Cache approaching maxmemory threshold (2.94GB / 3.20GB)
  at RedisClusterMonitor.pollStats (/app/cache/cluster.ts:77:9)
  at RedisClusterMonitor.triggerEvictionSafety (/app/cache/cluster.ts:104:13)
  at NodeJS.Timer.processTicksAndRejections (node:internal/process/task_queues:95:5)`
  },
  {
    id: "NECRO-1099",
    timestamp: new Date(Date.now() - 42 * 60 * 1000).toISOString(),
    service: "order-orchestrator",
    errorName: "ElasticBatchFlushTimeout",
    message: "Bulk ingest flush of 1,200 audit logs took 3100ms (threshold: 2000ms). Elastic cluster node-3 rebalancing shards.",
    severity: "INFO",
    tombstoneType: "weathered",
    threadId: "thr-0x741122ab",
    memoryDumpSnippet: "0x74112000: [00 00 0C 1C] FLUSH_LATENCY_MS: 3100\n0x74112010: [00 00 04 B0] DOC_COUNT: 1,200",
    stackTrace: `ElasticBatchFlushTimeout: Bulk operation took longer than timeout limit
  at ElasticsearchClient.bulk (/node_modules/@elastic/elasticsearch/lib/api/bulk.js:45:9)
  at async AuditLogger.flushBuffer (/app/telemetry/audit.ts:61:14)
  at async IntervalWorker.execute (/app/workers/audit_cron.ts:28:7)`
  }
];

// Crash generator pool for autonomous 15s streamer
const CRASH_STREAM_POOL = [
  {
    service: "auth-vault-v2",
    errorName: "JwtSignatureCorruptedPanic",
    message: "RS256 Public Key rotated unexpectedly without JWKS propagation. 1,420 incoming access tokens rejected with signature invalidation.",
    severity: "CRITICAL",
    tombstoneType: "obelisk",
    stackTrace: `JwtSignatureCorruptedPanic: KeyID 'kid-2026-q4' missing from active JWKS cache
  at KeyVault.fetchPublicKey (/app/auth/jwks.ts:114:15)
  at TokenVerifier.validateRS256 (/app/auth/jwt.ts:63:9)
  at async AuthMiddleware.handle (/app/http/middleware.ts:40:19)`
  },
  {
    service: "payment-daemon",
    errorName: "IdempotencyKeyCollisionException",
    message: "Concurrent double-submission detected for idempotency key idemp_99ff12. Second charge sequence terminated safely.",
    severity: "WARNING",
    tombstoneType: "arched",
    stackTrace: `IdempotencyKeyCollisionException: Simultaneous locking acquired by worker thr-0x12b
  at IdempotencyVault.lockKey (/app/payment/idemp.ts:44:11)
  at async ChargeService.processPayment (/app/payment/charge.ts:98:13)
  at async Express.router (/app/routes/charge.ts:22:9)`
  },
  {
    service: "inventory-db",
    errorName: "DiskIopsSaturationAlert",
    message: "NVMe EBS burst balance drained to 2.1%. Checkpoint sync writes deferred by storage controller.",
    severity: "CRITICAL",
    tombstoneType: "celtic",
    stackTrace: `DiskIopsSaturationAlert: write(2) took 1840ms on /var/lib/postgresql/16/data
  at PostgreSqlStorageEngine.flushWalBuffer (wal.c:1924)
  at CheckpointerMainLoop (checkpointer.c:482)`
  },
  {
    service: "edge-router",
    errorName: "BgpRouteFlapDetected",
    message: "Upstream transit peer AS64512 advertised 14 route withdrawals in 30 seconds. Ingress packets rerouting to secondary transit link.",
    severity: "WARNING",
    tombstoneType: "arched",
    stackTrace: `BgpRouteFlapDetected: Withdrawn prefix 203.0.113.0/24 flapping
  at BgpPeerSession.handleWithdrawal (/src/routing/bgp.rs:341:9)
  at EdgeFIB.recalculateNextHop (/src/routing/fib.rs:88:13)`
  },
  {
    service: "order-orchestrator",
    errorName: "SagaCompensationTimeout",
    message: "Compensating transaction comp_tx_492 failed to release reserved courier slot after order cancellation.",
    severity: "INFO",
    tombstoneType: "weathered",
    stackTrace: `SagaCompensationTimeout: HTTP 504 Gateway Timeout from courier-partner-api
  at CourierClient.releaseSlot (/app/integrations/courier.ts:74:11)
  at async CancelOrderSaga.compensate (/app/sagas/cancel.ts:55:16)`
  }
];

// ==========================================================================
// 4. REACTIVE STATE ENGINE (NecroStore)
// ==========================================================================

class NecroStore {
  constructor() {
    this.incidents = SEED_INCIDENTS.map(inc => ({
      ...inc,
      status: 'ACTIVE'
    }));
    
    this.exorcisedIncidents = [];
    this.selectedIncident = null;

    this.filters = {
      search: '',
      severity: 'ALL',
      service: 'ALL',
      sort: 'NEWEST'
    };

    this.activeView = 'GRAVEYARD'; // 'GRAVEYARD' | 'CRYPT'
    this.isStreaming = true;
    this.streamCadence = 15; // seconds
    this.countdown = 15;
    this.timerId = null;

    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach(cb => cb(this));
  }

  // Calculate dynamic Sanity Score (0-100%)
  getSanityScore() {
    const active = this.getActiveIncidents();
    const criticalCount = active.filter(i => i.severity === 'CRITICAL').length;
    const warningCount = active.filter(i => i.severity === 'WARNING').length;
    const infoCount = active.filter(i => i.severity === 'INFO').length;

    const penalty = (criticalCount * 22) + (warningCount * 8) + (infoCount * 2);
    const score = Math.max(0, 100 - penalty);
    return score;
  }

  getActiveIncidents() {
    return this.incidents.filter(i => i.status === 'ACTIVE');
  }

  getFilteredIncidents() {
    let list = this.activeView === 'GRAVEYARD' 
      ? this.getActiveIncidents() 
      : [...this.exorcisedIncidents];

    // Filter by Severity
    if (this.filters.severity !== 'ALL') {
      list = list.filter(i => i.severity === this.filters.severity);
    }

    // Filter by Service
    if (this.filters.service !== 'ALL') {
      list = list.filter(i => i.service === this.filters.service);
    }

    // Filter by Search Query
    if (this.filters.search.trim()) {
      const q = this.filters.search.toLowerCase().trim();
      list = list.filter(i => 
        i.errorName.toLowerCase().includes(q) ||
        i.message.toLowerCase().includes(q) ||
        i.service.toLowerCase().includes(q) ||
        i.id.toLowerCase().includes(q) ||
        i.threadId.toLowerCase().includes(q) ||
        i.stackTrace.toLowerCase().includes(q)
      );
    }

    // Sort order
    if (this.filters.sort === 'NEWEST') {
      list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } else if (this.filters.sort === 'SEVERITY') {
      const weight = { CRITICAL: 3, WARNING: 2, INFO: 1 };
      list.sort((a, b) => weight[b.severity] - weight[a.severity]);
    } else if (this.filters.sort === 'SERVICE') {
      list.sort((a, b) => a.service.localeCompare(b.service));
    }

    return list;
  }

  // Spawn a fresh incident
  summonIncident(customData = null) {
    const template = customData || CRASH_STREAM_POOL[Math.floor(Math.random() * CRASH_STREAM_POOL.length)];
    const randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    const newId = `NECRO-${Math.floor(2000 + Math.random() * 8000)}`;

    const newIncident = {
      id: newId,
      timestamp: new Date().toISOString(),
      service: template.service,
      errorName: template.errorName,
      message: template.message,
      severity: template.severity,
      tombstoneType: template.tombstoneType || 'celtic',
      threadId: `thr-0x${randomHex}`,
      memoryDumpSnippet: `0x${randomHex.toUpperCase()}: [FF DE AD BE] EXCEPTION_RAISED\n0x00004A20: [00 00 00 01] UNHANDLED_ABORT`,
      stackTrace: template.stackTrace,
      status: 'ACTIVE',
      isNew: true
    };

    this.incidents.unshift(newIncident);
    audio.playSummonAlert(newIncident.severity);
    this.notify();
    return newIncident;
  }

  // Exorcise Bug action
  exorciseIncident(incidentId) {
    const idx = this.incidents.findIndex(i => i.id === incidentId);
    if (idx === -1) return null;

    const incident = this.incidents[idx];
    incident.status = 'EXORCISED';
    incident.resolvedAt = new Date().toISOString();

    // Remove from active list and append to exorcised
    this.incidents.splice(idx, 1);
    this.exorcisedIncidents.unshift(incident);

    audio.playExorcismPurge();
    this.notify();
    return incident;
  }

  // Resurrect Bug from Crypt
  resurrectIncident(incidentId) {
    const idx = this.exorcisedIncidents.findIndex(i => i.id === incidentId);
    if (idx === -1) return null;

    const incident = this.exorcisedIncidents.splice(idx, 1)[0];
    incident.status = 'ACTIVE';
    incident.timestamp = new Date().toISOString(); // refresh timestamp

    this.incidents.unshift(incident);
    audio.playSummonAlert('WARNING');
    this.notify();
    return incident;
  }
}

const store = new NecroStore();

// ==========================================================================
// 5. DOM CONTROLLER & RENDERERS
// ==========================================================================

const DOM = {
  // Navigation & Metrics
  sanityPercentText: document.getElementById('sanity-percent-text'),
  sanityBar: document.getElementById('sanity-bar'),
  sanityStatusLight: document.getElementById('sanity-status-light'),
  sanityVerdict: document.getElementById('sanity-verdict'),
  counterCritical: document.getElementById('counter-critical'),
  counterWarning: document.getElementById('counter-warning'),
  counterInfo: document.getElementById('counter-info'),
  counterExorcised: document.getElementById('counter-exorcised'),
  badgeActiveCount: document.getElementById('badge-active-count'),
  badgeCryptCount: document.getElementById('badge-crypt-count'),

  // Controls
  btnManualSummon: document.getElementById('btn-manual-summon'),
  btnStreamToggle: document.getElementById('btn-stream-toggle'),
  streamStatusLabel: document.getElementById('stream-status-label'),
  streamIndicatorDot: document.getElementById('stream-indicator-dot'),
  streamCountdownBadge: document.getElementById('stream-countdown-badge'),
  btnSoundToggle: document.getElementById('btn-sound-toggle'),
  iconSoundOn: document.getElementById('icon-sound-on'),
  iconSoundOff: document.getElementById('icon-sound-off'),

  // Tabs & Views
  tabCemetery: document.getElementById('tab-cemetery'),
  tabCrypt: document.getElementById('tab-crypt'),
  sectionGraveyard: document.getElementById('section-graveyard'),
  sectionCrypt: document.getElementById('section-crypt'),
  cemeteryGrid: document.getElementById('cemetery-grid'),
  cemeteryEmptyState: document.getElementById('cemetery-empty-state'),
  btnEmptySummon: document.getElementById('btn-empty-summon'),
  cryptGrid: document.getElementById('crypt-grid'),
  cryptEmptyState: document.getElementById('crypt-empty-state'),
  btnReturnCemetery: document.getElementById('btn-return-cemetery'),
  btnEmptyReturnCemetery: document.getElementById('btn-empty-return-cemetery'),

  // Filters & Search
  filterSearch: document.getElementById('filter-search'),
  btnClearSearch: document.getElementById('btn-clear-search'),
  filterSevButtons: document.querySelectorAll('.filter-sev-btn'),
  filterService: document.getElementById('filter-service'),
  sortOrder: document.getElementById('sort-order'),

  // Phantom Summons Modal
  phantomModal: document.getElementById('phantom-modal'),
  modalTombstoneIcon: document.getElementById('modal-tombstone-icon'),
  modalIncidentId: document.getElementById('modal-incident-id'),
  modalSeverityBadge: document.getElementById('modal-severity-badge'),
  modalServiceBadge: document.getElementById('modal-service-badge'),
  modalThreadBadge: document.getElementById('modal-thread-badge'),
  modalIncidentTitle: document.getElementById('modal-incident-title'),
  modalIncidentTimestamp: document.getElementById('modal-incident-timestamp'),
  modalIncidentMsg: document.getElementById('modal-incident-msg'),
  modalMemorySnapshot: document.getElementById('modal-memory-snapshot'),
  terminalStream: document.getElementById('terminal-stream'),
  btnSkipTypewriter: document.getElementById('btn-skip-typewriter'),
  btnCopyStack: document.getElementById('btn-copy-stack'),
  copyBtnText: document.getElementById('copy-btn-text'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  btnModalCancel: document.getElementById('btn-modal-cancel'),
  btnExorcise: document.getElementById('btn-exorcise'),

  // Particle & Toast Layer
  particleContainer: document.getElementById('particle-container'),
  toastContainer: document.getElementById('toast-container')
};

// ==========================================================================
// 6. RENDER LOGIC: THE APP GRAVEYARD & THE CRYPT
// ==========================================================================

function formatRelativeTime(isoString) {
  const diffSec = Math.floor((Date.now() - new Date(isoString).getTime()) / 1000);
  if (diffSec < 10) return 'Just now';
  if (diffSec < 60) return `${diffSec}s ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHour = Math.floor(diffMin / 60);
  return `${diffHour}h ago`;
}

function renderTelemetry() {
  const active = store.getActiveIncidents();
  const crit = active.filter(i => i.severity === 'CRITICAL').length;
  const warn = active.filter(i => i.severity === 'WARNING').length;
  const info = active.filter(i => i.severity === 'INFO').length;
  const exorcised = store.exorcisedIncidents.length;

  DOM.counterCritical.textContent = crit;
  DOM.counterWarning.textContent = warn;
  DOM.counterInfo.textContent = info;
  DOM.counterExorcised.textContent = exorcised;
  DOM.badgeActiveCount.textContent = active.length;
  DOM.badgeCryptCount.textContent = exorcised;

  // Sanity Score
  const sanity = store.getSanityScore();
  DOM.sanityPercentText.textContent = `${sanity}%`;
  DOM.sanityBar.style.width = `${sanity}%`;

  if (sanity > 75) {
    DOM.sanityBar.className = 'sanity-bar-fill h-full bg-neon-green rounded-full';
    DOM.sanityPercentText.className = 'text-neon-green font-bold text-sm';
    DOM.sanityStatusLight.className = 'w-2 h-2 rounded-full bg-neon-green';
    DOM.sanityVerdict.textContent = 'Grounds are serene • All services healthy';
  } else if (sanity > 40) {
    DOM.sanityBar.className = 'sanity-bar-fill h-full bg-phantasmal-purple rounded-full';
    DOM.sanityPercentText.className = 'text-phantasmal-purple font-bold text-sm';
    DOM.sanityStatusLight.className = 'w-2 h-2 rounded-full bg-phantasmal-purple';
    DOM.sanityVerdict.textContent = 'Ethereal instability detected • Triage warnings';
  } else {
    DOM.sanityBar.className = 'sanity-bar-fill h-full bg-toxic-red rounded-full';
    DOM.sanityPercentText.className = 'text-toxic-red font-bold text-sm animate-pulse';
    DOM.sanityStatusLight.className = 'w-2 h-2 rounded-full bg-toxic-red animate-ping';
    DOM.sanityVerdict.textContent = 'CRITICAL HAUNTING • Severe unhandled outages';
  }
}

function renderCemeteryGrid() {
  const incidents = store.getFilteredIncidents();

  if (incidents.length === 0) {
    DOM.cemeteryGrid.innerHTML = '';
    DOM.cemeteryEmptyState.classList.remove('hidden');
    return;
  }

  DOM.cemeteryEmptyState.classList.add('hidden');

  DOM.cemeteryGrid.innerHTML = incidents.map(incident => {
    const sevClass = incident.severity === 'CRITICAL' 
      ? 'severity-critical' 
      : incident.severity === 'WARNING' 
        ? 'severity-warning' 
        : 'severity-info';

    const sevBadgeColor = incident.severity === 'CRITICAL'
      ? 'bg-toxic-red/15 text-toxic-red border-toxic-red/40'
      : incident.severity === 'WARNING'
        ? 'bg-phantasmal-purple/15 text-phantasmal-purple border-phantasmal-purple/40'
        : 'bg-crypt-slate/20 text-bone-muted border-crypt-slate/40';

    const vectorSvg = GothicVectors[incident.tombstoneType] || GothicVectors.celtic;
    const isCritical = incident.severity === 'CRITICAL';

    // Ambient Mist layer under Critical cards:
    const mistHtml = isCritical ? `
      <div class="critical-mist-container" aria-hidden="true">
        <div class="mist-layer mist-layer-1"></div>
        <div class="mist-layer mist-layer-2"></div>
        <div class="mist-layer mist-layer-3"></div>
      </div>
    ` : '';

    return `
      <article 
        class="headstone-card ${sevClass} ${incident.isNew ? 'tombstone-spawn-in' : ''} flex flex-col justify-between p-5 select-none" 
        data-incident-id="${incident.id}"
        tabindex="0"
        role="button"
        aria-label="Inspect ${incident.severity} error on ${incident.service}: ${incident.errorName}"
      >
        <!-- Mist effect beneath card -->
        ${mistHtml}

        <!-- Card Header Info -->
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${sevBadgeColor}">
              ${incident.severity}
            </span>
            <span class="text-[11px] font-mono text-bone-muted">
              ${formatRelativeTime(incident.timestamp)}
            </span>
          </div>

          <!-- Gothic SVG Vector Headstone -->
          <div class="py-2 transform transition-transform group-hover:scale-105">
            ${vectorSvg}
          </div>

          <!-- Microservice Chip & Thread -->
          <div class="flex items-center justify-between text-[11px] font-mono text-bone-muted my-2 border-b border-midnight-border/60 pb-2">
            <span class="truncate max-w-[130px] font-semibold text-bone-white flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full ${isCritical ? 'bg-toxic-red' : 'bg-phantasmal-purple'}"></span>
              ${incident.service}
            </span>
            <span class="text-crypt-slate text-[10px]">${incident.threadId}</span>
          </div>

          <!-- Error Name & Excerpt -->
          <h3 class="font-serif text-sm sm:text-base font-bold text-bone-white leading-snug line-clamp-1 mb-1" title="${incident.errorName}">
            ${incident.errorName}
          </h3>
          <p class="text-xs text-bone-muted font-mono line-clamp-2 leading-relaxed">
            ${incident.message}
          </p>
        </div>

        <!-- Footer Action Cue -->
        <div class="pt-3 mt-3 border-t border-midnight-border/40 flex items-center justify-between text-xs font-mono">
          <span class="text-neon-green text-[11px] flex items-center gap-1 font-semibold group-hover:underline">
            <span>Phantom Summon</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </span>
          <span class="text-[10px] text-crypt-slate">${incident.id}</span>
        </div>

        <!-- Stone Pedestal Base Line -->
        <div class="tombstone-pedestal -mx-5 -mb-5 mt-4" aria-hidden="true"></div>
      </article>
    `;
  }).join('');

  // Attach click & keyboard listeners to headstone cards
  DOM.cemeteryGrid.querySelectorAll('.headstone-card').forEach(card => {
    const id = card.getAttribute('data-incident-id');
    const openInspector = () => {
      audio.playTombstoneClick();
      openPhantomSummons(id);
    };

    card.addEventListener('click', openInspector);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openInspector();
      }
    });
  });
}

function renderCryptGrid() {
  const incidents = store.getFilteredIncidents();

  if (incidents.length === 0) {
    DOM.cryptGrid.innerHTML = '';
    DOM.cryptEmptyState.classList.remove('hidden');
    return;
  }

  DOM.cryptEmptyState.classList.add('hidden');

  DOM.cryptGrid.innerHTML = incidents.map(incident => {
    return `
      <div class="bg-midnight-card/80 border border-phantasmal-purple/30 rounded-xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
        <div class="absolute -top-6 -right-6 w-20 h-20 bg-phantasmal-purple/10 rounded-full blur-xl pointer-events-none"></div>

        <div>
          <div class="flex items-center justify-between text-xs font-mono mb-2">
            <span class="px-2 py-0.5 rounded bg-black/60 border border-midnight-border text-[11px] font-bold text-bone-muted">
              ${incident.id}
            </span>
            <span class="text-neon-green font-semibold text-[11px] flex items-center gap-1">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Exorcised
            </span>
          </div>

          <h3 class="font-serif text-base font-bold text-bone-white mb-1 line-clamp-1">
            ${incident.errorName}
          </h3>
          <p class="text-xs font-mono text-bone-muted line-clamp-2 mb-3">
            ${incident.message}
          </p>

          <div class="text-[11px] font-mono text-crypt-slate space-y-1 border-t border-midnight-border/60 pt-2">
            <div>Service: <span class="text-bone-muted">${incident.service}</span></div>
            <div>Banished: <span class="text-bone-muted">${formatRelativeTime(incident.resolvedAt || incident.timestamp)}</span></div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-midnight-border flex items-center justify-between gap-2">
          <button class="btn-resurrect text-xs font-mono text-phantasmal-purple hover:text-white hover:underline flex items-center gap-1" data-resurrect-id="${incident.id}">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2.5 2v6h6M21.5 22v-6h-6"/>
              <path d="M22 11.5A10 10 0 0 0 3.2 7.2L2.5 8M2 12.5a10 10 0 0 0 18.8 4.3l.7-.8"/>
            </svg>
            Resurrect Bug
          </button>
          <span class="text-[10px] font-mono text-crypt-slate">Safe in Crypt</span>
        </div>
      </div>
    `;
  }).join('');

  // Attach resurrect listeners
  DOM.cryptGrid.querySelectorAll('.btn-resurrect').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-resurrect-id');
      const resurrected = store.resurrectIncident(id);
      if (resurrected) {
        showToast(`Bug ${id} resurrected back into Active Graveyard!`, 'warning');
      }
    });
  });
}

function updateAppView() {
  renderTelemetry();
  if (store.activeView === 'GRAVEYARD') {
    DOM.sectionGraveyard.classList.remove('hidden');
    DOM.sectionCrypt.classList.add('hidden');
    renderCemeteryGrid();
  } else {
    DOM.sectionGraveyard.classList.add('hidden');
    DOM.sectionCrypt.classList.remove('hidden');
    renderCryptGrid();
  }
}

store.subscribe(() => {
  updateAppView();
});

// ==========================================================================
// 7. PHANTOM SUMMONS: MODAL & SÉANCE TERMINAL TYPEWRITER
// ==========================================================================

let typewriterAnimId = null;
let currentFullTrace = '';

function openPhantomSummons(incidentId) {
  const incident = store.getActiveIncidents().find(i => i.id === incidentId);
  if (!incident) return;

  store.selectedIncident = incident;

  // Set modal header details
  DOM.modalIncidentId.textContent = incident.id;
  DOM.modalIncidentTitle.textContent = `${incident.errorName}: ${incident.message.slice(0, 70)}...`;
  DOM.modalIncidentTimestamp.textContent = `Occurred at: ${new Date(incident.timestamp).toLocaleString()} (${formatRelativeTime(incident.timestamp)})`;
  DOM.modalIncidentMsg.textContent = incident.message;
  DOM.modalMemorySnapshot.textContent = incident.memoryDumpSnippet ? incident.memoryDumpSnippet.split('\n')[0] : 'HEAP_DUMP: 0xDEADBEEF';
  DOM.modalServiceBadge.textContent = incident.service;
  DOM.modalThreadBadge.textContent = incident.threadId;

  // Severity Badge Colors
  DOM.modalSeverityBadge.textContent = incident.severity;
  if (incident.severity === 'CRITICAL') {
    DOM.modalSeverityBadge.className = 'px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase bg-toxic-red/20 text-toxic-red border border-toxic-red/40 animate-pulse';
  } else if (incident.severity === 'WARNING') {
    DOM.modalSeverityBadge.className = 'px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase bg-phantasmal-purple/20 text-phantasmal-purple border border-phantasmal-purple/40';
  } else {
    DOM.modalSeverityBadge.className = 'px-2.5 py-0.5 rounded font-mono text-xs font-bold uppercase bg-crypt-slate/20 text-bone-muted border border-crypt-slate/40';
  }

  // Tombstone Vector Icon in Modal Header
  DOM.modalTombstoneIcon.innerHTML = GothicVectors[incident.tombstoneType] || GothicVectors.celtic;

  // Prepare full terminal stream text
  currentFullTrace = `/* SÉANCE TRANSCRIPTION: PROCESS SPIRIT CAPTURED ON ${incident.threadId} */\n` +
    `Timestamp: ${incident.timestamp}\n` +
    `Microservice: ${incident.service}\n` +
    `Fault Severity: [${incident.severity}]\n` +
    `------------------------------------------------------------\n` +
    `${incident.memoryDumpSnippet}\n` +
    `------------------------------------------------------------\n` +
    `FORENSIC STACK TRACE:\n${incident.stackTrace}\n\n` +
    `[PROCESS CONTEXT CLOSED — MACHINE SPIRIT AWAITING EXORCISM]`;

  // Reset typewriter
  DOM.terminalStream.textContent = '';
  DOM.copyBtnText.textContent = 'Copy Trace';
  DOM.phantomModal.classList.remove('hidden');

  // Start Monospace Typewriter effect
  startTerminalTypewriter(currentFullTrace);

  // Focus trap / keyboard accessibility
  DOM.btnExorcise.focus();
}

let typewriterTimer = null;

function startTerminalTypewriter(fullText) {
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }

  let charIndex = 0;
  const charsPerTick = 4;
  let lastAudioTick = 0;

  typewriterTimer = setInterval(() => {
    if (charIndex < fullText.length) {
      charIndex += charsPerTick;
      DOM.terminalStream.textContent = fullText.slice(0, charIndex);

      const now = Date.now();
      if (now - lastAudioTick > 60) {
        audio.playTypewriterTick();
        lastAudioTick = now;
      }

      DOM.terminalStream.parentElement.scrollTop = DOM.terminalStream.parentElement.scrollHeight;
    } else {
      DOM.terminalStream.textContent = fullText;
      clearInterval(typewriterTimer);
      typewriterTimer = null;
    }
  }, 20);
}

function skipTerminalTypewriter() {
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }
  DOM.terminalStream.textContent = currentFullTrace;
  DOM.terminalStream.parentElement.scrollTop = DOM.terminalStream.parentElement.scrollHeight;
}

function closePhantomSummons() {
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }
  DOM.phantomModal.classList.add('hidden');
  store.selectedIncident = null;
}

// ==========================================================================
// 8. EXORCISM & PARTICLE DISPERSAL ENGINE
// ==========================================================================

function spawnAshParticles(originX, originY) {
  const particleCount = 28;
  const colors = ['#ff3333', '#a855f7', '#00ff66', '#f1f5f9', '#475569'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'ash-particle';

    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 160 + 50;

    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 80; // drift upward
    const rot = Math.random() * 360;
    const duration = 0.8 + Math.random() * 0.8;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 10px ${color}`;
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    particle.style.setProperty('--rot', `${rot}deg`);
    particle.style.setProperty('--duration', `${duration}s`);

    DOM.particleContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
}

function handleExorciseBug() {
  if (!store.selectedIncident) return;
  const targetId = store.selectedIncident.id;

  // Find corresponding DOM headstone card in graveyard
  const cardElement = DOM.cemeteryGrid.querySelector(`[data-incident-id="${targetId}"]`);

  // Close modal immediately
  closePhantomSummons();

  if (cardElement) {
    // Get card coordinates for ash dispersal burst
    const rect = cardElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Trigger violent seismic purge shake & fracture
    cardElement.classList.add('headstone-crumbling');

    // Spawn dynamic particles
    spawnAshParticles(centerX, centerY);

    // After animation finishes (850ms), complete state exorcism
    setTimeout(() => {
      const exorcised = store.exorciseIncident(targetId);
      if (exorcised) {
        showToast(`Bug ${targetId} successfully exorcised into the Mausoleum!`, 'success');
      }
    }, 850);
  } else {
    // Fallback if card was scrolled or not in DOM
    store.exorciseIncident(targetId);
    showToast(`Bug ${targetId} successfully exorcised!`, 'success');
  }
}

// ==========================================================================
// 9. TOAST NOTIFICATION ENGINE
// ==========================================================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'necro-toast';

  const iconSvg = type === 'success' 
    ? `<svg class="w-5 h-5 text-neon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
    : type === 'warning'
      ? `<svg class="w-5 h-5 text-toxic-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
      : `<svg class="w-5 h-5 text-phantasmal-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <div class="text-xs font-mono text-bone-white">${message}</div>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// 10. AUTONOMOUS CRASH STREAMER (Pushes every 15s)
// ==========================================================================

function startAutonomousStream() {
  if (store.timerId) clearInterval(store.timerId);

  store.countdown = store.streamCadence;
  DOM.streamCountdownBadge.textContent = `${store.countdown}s`;

  store.timerId = setInterval(() => {
    if (!store.isStreaming) return;

    store.countdown--;
    if (store.countdown <= 0) {
      store.countdown = store.streamCadence;
      const spawned = store.summonIncident();
      showToast(`Autonomous spectre spawned: ${spawned.errorName} (${spawned.service})`, 'warning');
    }

    DOM.streamCountdownBadge.textContent = `${store.countdown}s`;
  }, 1000);
}

function toggleStream() {
  store.isStreaming = !store.isStreaming;

  if (store.isStreaming) {
    DOM.streamStatusLabel.textContent = 'Stream: Active';
    DOM.streamIndicatorDot.className = 'w-2 h-2 rounded-full bg-neon-green animate-ping';
    DOM.btnStreamToggle.className = 'px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-2 text-neon-green hover:bg-white/5 transition-colors';
  } else {
    DOM.streamStatusLabel.textContent = 'Stream: Paused';
    DOM.streamIndicatorDot.className = 'w-2 h-2 rounded-full bg-bone-muted';
    DOM.btnStreamToggle.className = 'px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-2 text-bone-muted hover:bg-white/5 transition-colors';
  }
}

// ==========================================================================
// 11. EVENT LISTENERS & USER FLOWS
// ==========================================================================

function setupEventListeners() {
  // Manual Summon Incident button
  DOM.btnManualSummon.addEventListener('click', () => {
    const spawned = store.summonIncident();
    showToast(`Manual incident summoned: ${spawned.errorName} on ${spawned.service}`, 'warning');
  });

  DOM.btnEmptySummon.addEventListener('click', () => {
    store.summonIncident();
  });

  // Stream toggle
  DOM.btnStreamToggle.addEventListener('click', toggleStream);

  // Audio Toggle
  DOM.btnSoundToggle.addEventListener('click', () => {
    const isEnabled = audio.toggleSound();
    if (isEnabled) {
      DOM.iconSoundOn.classList.remove('hidden');
      DOM.iconSoundOff.classList.add('hidden');
      showToast('Ethereal Audio enabled', 'info');
    } else {
      DOM.iconSoundOn.classList.add('hidden');
      DOM.iconSoundOff.classList.remove('hidden');
      showToast('Ethereal Audio muted', 'info');
    }
  });

  // Tab View Switchers
  DOM.tabCemetery.addEventListener('click', () => {
    store.activeView = 'GRAVEYARD';
    DOM.tabCemetery.className = 'px-3 py-1 rounded-md text-xs font-mono font-medium bg-phantasmal-purple text-white shadow-sm transition-all flex items-center gap-1.5';
    DOM.tabCrypt.className = 'px-3 py-1 rounded-md text-xs font-mono font-medium text-bone-muted hover:text-bone-white transition-all flex items-center gap-1.5';
    updateAppView();
  });

  DOM.tabCrypt.addEventListener('click', () => {
    store.activeView = 'CRYPT';
    DOM.tabCrypt.className = 'px-3 py-1 rounded-md text-xs font-mono font-medium bg-phantasmal-purple text-white shadow-sm transition-all flex items-center gap-1.5';
    DOM.tabCemetery.className = 'px-3 py-1 rounded-md text-xs font-mono font-medium text-bone-muted hover:text-bone-white transition-all flex items-center gap-1.5';
    updateAppView();
  });

  DOM.btnReturnCemetery.addEventListener('click', () => {
    DOM.tabCemetery.click();
  });
  DOM.btnEmptyReturnCemetery.addEventListener('click', () => {
    DOM.tabCemetery.click();
  });

  // Filters & Search
  DOM.filterSearch.addEventListener('input', (e) => {
    store.filters.search = e.target.value;
    DOM.btnClearSearch.classList.toggle('hidden', !e.target.value);
    updateAppView();
  });

  DOM.btnClearSearch.addEventListener('click', () => {
    DOM.filterSearch.value = '';
    store.filters.search = '';
    DOM.btnClearSearch.classList.add('hidden');
    updateAppView();
  });

  DOM.filterSevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.filterSevButtons.forEach(b => {
        b.classList.remove('bg-midnight-border', 'text-bone-white', 'font-medium');
      });
      btn.classList.add('bg-midnight-border', 'text-bone-white', 'font-medium');
      store.filters.severity = btn.getAttribute('data-severity');
      updateAppView();
    });
  });

  DOM.filterService.addEventListener('change', (e) => {
    store.filters.service = e.target.value;
    updateAppView();
  });

  DOM.sortOrder.addEventListener('change', (e) => {
    store.filters.sort = e.target.value;
    updateAppView();
  });

  // Modal Buttons
  DOM.btnCloseModal.addEventListener('click', closePhantomSummons);
  DOM.btnModalCancel.addEventListener('click', closePhantomSummons);
  DOM.btnSkipTypewriter.addEventListener('click', skipTerminalTypewriter);

  // Copy Stack Trace Button
  DOM.btnCopyStack.addEventListener('click', () => {
    if (currentFullTrace) {
      navigator.clipboard.writeText(currentFullTrace).then(() => {
        DOM.copyBtnText.textContent = 'Copied!';
        showToast('Stack trace copied to clipboard', 'info');
        setTimeout(() => {
          DOM.copyBtnText.textContent = 'Copy Trace';
        }, 2000);
      }).catch(() => {
        DOM.copyBtnText.textContent = 'Failed to copy';
      });
    }
  });

  // Exorcise Bug Button
  DOM.btnExorcise.addEventListener('click', handleExorciseBug);

  // Backdrop click dismiss
  DOM.phantomModal.addEventListener('click', (e) => {
    if (e.target === DOM.phantomModal) {
      closePhantomSummons();
    }
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Esc closes modal
    if (e.key === 'Escape' && !DOM.phantomModal.classList.contains('hidden')) {
      closePhantomSummons();
      return;
    }

    // Ignore global shortcuts when inside input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    if (e.key.toLowerCase() === 's') {
      DOM.btnManualSummon.click();
    } else if (e.key.toLowerCase() === 'm') {
      DOM.btnSoundToggle.click();
    } else if (e.key.toLowerCase() === 'c') {
      if (store.activeView === 'GRAVEYARD') {
        DOM.tabCrypt.click();
      } else {
        DOM.tabCemetery.click();
      }
    }
  });
}

// ==========================================================================
// 12. INITIALIZATION
// ==========================================================================

function initApp() {
  setupEventListeners();
  updateAppView();
  startAutonomousStream();
  showToast('NecroLog Initialized. Active cemetery monitoring enabled.', 'info');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
