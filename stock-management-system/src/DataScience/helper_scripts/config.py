import logging
import os


logger = logging.getLogger()


def set_environment():
    logger.log(2, "Setting Environment with the default configuration...")
    # environment variables
    os.environ.setdefault('DEBUG', 'True')
    os.environ.setdefault('DB_HOST', '34.66.72.138')
    os.environ.setdefault('DB_PORT', '5432')
    os.environ.setdefault('DB_NAME', 'SPP')
    os.environ.setdefault('DB_USER', 'team3user')
    os.environ.setdefault('DB_PASS', 'team3user')
    os.environ.setdefault('INSTANCE_CONNECTION_NAME',
                          'model-factor-347514:us-central1:team3db')
    os.environ.setdefault(
        'DB_ROOT_CERT', 'C:\\Personal\\Certifications\\APCDS\\CapstoneProject\\Data_Engineering\\Setup_CloudSQL\\server-ca.pem')
    os.environ.setdefault(
        'DB_CERT', 'C:\\Personal\\Certifications\\APCDS\\CapstoneProject\\Data_Engineering\\Setup_CloudSQL\\client-cert.pem')
    os.environ.setdefault(
        'DB_KEY', 'C:\\Personal\\Certifications\\APCDS\\CapstoneProject\\Data_Engineering\\Setup_CloudSQL\\client-key.pem')
