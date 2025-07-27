const os = require('os');
const { execSync } = require('child_process');

console.log('System Requirements Check\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
console.log(`✓ Node.js version: ${nodeVersion}`);
if (majorVersion < 16) {
    console.error('✗ Node.js 16.0.0 or higher is required');
    process.exit(1);
}

// Check available memory
const totalMemory = os.totalmem() / (1024 * 1024 * 1024); // Convert to GB
const freeMemory = os.freemem() / (1024 * 1024 * 1024);
console.log(`✓ Total memory: ${totalMemory.toFixed(2)} GB`);
console.log(`✓ Free memory: ${freeMemory.toFixed(2)} GB`);
if (freeMemory < 0.5) {
    console.warn('⚠ Warning: Low memory available');
}

// Check CPU
const cpus = os.cpus();
console.log(`✓ CPU cores: ${cpus.length}`);
console.log(`✓ CPU model: ${cpus[0].model}`);

// Check platform
console.log(`✓ Platform: ${os.platform()}`);
console.log(`✓ Architecture: ${os.arch()}`);

// Check npm version
try {
    const npmVersion = execSync('npm -v').toString().trim();
    console.log(`✓ npm version: ${npmVersion}`);
} catch (error) {
    console.error('✗ npm not found');
}

// Check for required ports
const net = require('net');
const PORT = process.env.PORT || 8080;

const server = net.createServer();
server.listen(PORT, () => {
    console.log(`✓ Port ${PORT} is available`);
    server.close();
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`✗ Port ${PORT} is already in use`);
        process.exit(1);
    }
});

console.log('\nAll system requirements met! ✓');
